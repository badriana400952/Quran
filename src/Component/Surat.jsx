import { Container, Card, CardBody, Text, Divider ,Button} from "@chakra-ui/react"
import { Outlet, Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import './componen.css'
const Surat = () => {
    const { id } = useParams()
    const [quran, setQuran] = useState([])
    const IDselanjutnya = parseInt(id) + 1
    useEffect(() => {
        const handleQuran = async () => {
            try {
                const response = await axios.get('https://equran.id/api/v2/surat/' + id);
                setQuran(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        handleQuran();

        return () => {
            // Membersihkan langganan (unsubscribe) jika komponen dilepas
            setQuran([]);
        };
    }, [id]);
    console.log(quran)

    const convertToText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };



    return (
        <>
            <Container maxW={'container.2xl'}>
                <Card>
                    <CardBody>
                        <Text fontSize={'35px'} fontWeight={'bold'} align={'right'} className="font">{quran.nama}</Text>
                        <Text fontSize={'20px'} align={'right'} >{quran.arti}</Text>
                        <Text fontSize={'20px'}  >{quran.namaLatin}</Text>
                        <Text fontSize={'20px'}  >{convertToText(quran.deskripsi)}</Text>
                    </CardBody>
                </Card>
                <Card p={4}>
                    {
                        quran.ayat && quran.ayat.map((q, i) => (
                            <CardBody key={i}>
                                <Text fontSize={'35px'} fontWeight={'bold'} textAlign={'right'} className="font">{q.teksArab}</Text>
                                <Text textAlign={'left'} fontSize={'20px'} mt={2}>{q.teksLatin}</Text>
                                <Text textAlign={'left'} fontSize={'20px'}>{q.teksIndonesia}</Text>
                                <Divider mt={2} />
                            </CardBody>
                        ))
                    }

                    {/* <Box height={'100%'} width={'100%'} bg={'gray.100'} mt={4}> */}
                        <Button bg={'gray.500'} color={'white'} py={'30px'} fontSize={'20px'}>
                            <Link to={`/${IDselanjutnya}`}>Surah Selanjutnya</Link>
                        </Button>
                    {/* </Box> */}
                </Card>
                <Outlet />
            </Container>
        </>
    )
}

export default Surat
