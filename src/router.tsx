import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";

import FilaOnline from "./pages/FilaOnline/filaOnline";

import AgendarConsulta1 from "@pages/AgendarConsultas/AgendarConsulta1";
import AgendarExames1 from "@pages/AgendarExames/AgendarExames1"; 
import AgendarExames2 from "@pages/AgendarExames/AgendarExames2";
import MeusEncaminhamentos from "@pages/MeusEncaminhamentos/meusEncaminhamentos";
import MeusAgendamentos from "@pages/MeusAgendamentos/meusAgendamentos";




export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/fila-online" element={<FilaOnline />} />

        <Route path="/agendar-consulta1" element={<AgendarConsulta1 />} />
        <Route path="/agendar-exames1" element={<AgendarExames1 />} />
        <Route path="/agendar-exames2" element={<AgendarExames2 />} />
        <Route path="/meus-encaminhamentos" element={<MeusEncaminhamentos />} />
        <Route path="/resultados-exames" element={<MeusAgendamentos />} />

      </Routes>
    </BrowserRouter>
  );
}
