
import Layout from "@components/Layout";

{/*Parte Lógica da Barra de Progresso*/}
const ETAPAS = [
  { id: 1, label: "Especialidade" },
  { id: 2, label: "Médico" },
  { id: 3, label: "Horário" },
  { id: 4, label: "Confirmação" },
];

import React, { useState } from "react";
export default function AgendamentoStepper() {
  // O estado continua igual: controlando a etapa atual na memória do React
  const [etapaAtual, setEtapaAtual] = useState<number>(2);

  // Array de etapas (dados locais)
  const ETAPAS = [
    { id: 1, label: "Especialidade" },
    { id: 2, label: "Médico" },
    { id: 3, label: "Horário" },
    { id: 4, label: "Confirmação" },
  ];


export default function AgendarConsulta1() {
    return(
        <Layout title="Agendar Consultas">
              return (
                <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"></div>
                <div className="grid grid-cols-4 w-full"></div>

        </Layout>
    );
}