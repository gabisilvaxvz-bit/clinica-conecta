import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";
<<<<<<< HEAD
import FilaOnline from "./pages/FilaOnline/filaOnline";
=======
import AgendarConsulta1 from "@pages/AgendarConsultas/AgendarConsulta1";
import AgendarExames1 from "@pages/AgendarExames/AgendarExames1"; 


>>>>>>> cb1727f709bb4f180b808233cb20abea97fb2a48

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/fila-online" element={<FilaOnline />} />
=======
        <Route path="/agendar-consulta1" element={<AgendarConsulta1 />} />
        <Route path="/agendar-exames1" element={<AgendarExames1 />} />
>>>>>>> cb1727f709bb4f180b808233cb20abea97fb2a48
      </Routes>
    </BrowserRouter>
  );
}