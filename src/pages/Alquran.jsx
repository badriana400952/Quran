import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Box, Flex, Card, Stack, CardBody, Heading, Text, CardFooter } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import './pages.css'
const Alquran = () => {
  const [quran, setQuran] = useState([])

  const handleQuran = async () => {
    const response = await axios.get('https://equran.id/api/v2/surat')
    setQuran(response.data.data)
  }
  useEffect(() => {
    handleQuran()
  }, [])

  const getExcerpt = (text, wordCount) => {
    return text.split(' ').slice(0, wordCount).join(' ');
  };

  const convertToText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };


  
  return (
    <>
      <Container maxW={'container.2xl'} mt={6} >
        <Flex justifyContent={'space-between'} flexWrap={'wrap'} gap={3}>
          {
            quran.map((q, i) => (
              <Link to={`/${q.nomor}`} key={i} >
                <Box width={{ lg: '600px', sm: '100%' }} >
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Flex flex={1} width={{ base: '100%', sm: '40%' }} bg={'#45FFCA'} alignItems={'center'} justifyContent={'center'}  >
                      <Heading size='lg' textAlign={'center'} className="fontPages" lineHeight={"50px"}>{q.nama}</Heading>
                    </Flex>

                    <Stack flex={2} >
                      <CardBody >

                        <Heading size='md'>Surah ke {q.nomor} {q.namaLatin}</Heading>

                        <Text py='2'>
                          {convertToText(getExcerpt(q.deskripsi, 13))} ...
                        </Text>
                      </CardBody>
                      <CardFooter>
                      </CardFooter>
                    </Stack>
                  </Card>

                </Box>
              </Link>
            ))}
        </Flex>
      </Container>
    </>
  )
}

export default Alquran
