import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";
import AgendarConsulta1 from "@pages/AgendarConsultas/AgendarConsulta1";
import AgendarExames1 from "@pages/AgendarExames/AgendarExames1"; 



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar-consulta1" element={<AgendarConsulta1 />} />
        <Route path="/agendar-exames1" element={<AgendarExames1 />} />
      </Routes>
    </BrowserRouter>
  );
}