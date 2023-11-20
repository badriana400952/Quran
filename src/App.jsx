
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoute from "./pages/Layoute";
import Alquran from "./pages/Alquran";
import About from "./pages/About";
import Surat from "./Component/Surat";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layoute />}>
            <Route exact index element={<Alquran />} />
            <Route path="/:id" index element={<Surat />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
