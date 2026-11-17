import { useState } from "react";
import Layout from "@components/Layout";

type StatusEtapa = "pendente" | "ativa" | "concluida";

type Etapa = {
  id: number;
  titulo: string;
};

type Medicos = {
  id: number;
  nome: string;
  subtitulo: string;
  icone: string;
};

const etapas: Etapa[] = [
  { id: 1, titulo: "Especialidade" },
  { id: 2, titulo: "Médico" },
  { id: 3, titulo: "Horário" },
  { id: 4, titulo: "Confirmação" },
];

const especialidades = [
  "Cardiologia",
  "Dermatologia",
  "Ortopedia",
  "Neurologia",
  "Ginecologia",
  "Pediatria",
  "Psiquiatria",
  "Endocrinologia",
  "Oftalmologia",
  "Gastroenterologia",
  "Urologia",
  "Reumatologia",
  "Otorrinolaringologia",
  "Nefrologia",
  "Hematologia",
  "Oncologia"
];

const tituloEspecialidade: Record<string, string> = {
  Cardiologia: "Cardiologista",
  Dermatologia: "Dermatologista",
  Ortopedia: "Ortopedista",
  Neurologia: "Neurologista",
  Ginecologia: "Ginecologista",
  Pediatria: "Pediatra",
  Psiquiatria: "Psiquiatra",
  Endocrinologia: "Endocrinologista",
  Oftalmologia: "Oftalmologista",
  Gastroenterologia: "Gastroenterologista",
  Urologia: "Urologista",
  Reumatologia: "Reumatologista",
  Otorrinolaringologia: "Otorrinolaringologista",
  Nefrologia: "Nefrologista",
  Hematologia: "Hematologista",
  Oncologia: "Oncologista",
};

const medicosPorEspecialidade: Record<string, string[]> = {
  //O string[] serve para colocar os nomes dos médicos como uma lista, e ele vai perrcorer a lista de especialidades e colocar os médicos que pertencem a cada especialidade
  Cardiologia: ["Dr. João Silva", "Dra. Maria Oliveira", "Dr. Carlos Pereira", "Dra. Fernanda Costa", "Dr. Lucas Almeida", "Dra. Ana Souza",
                "Dr. Pedro Santos", "Dra. Juliana Lima", "Dr. Rafael Rocha", "Dra. Camila Martins","Dr. Bruno Ferreira", "Dra. Mariana Gomes",
                "Dr. Felipe Ribeiro", "Dra. Larissa Mendes", "Dr. Gustavo Carvalho", "Dr. Juan Pablo"
  ],
  Dermatologia: ["Dr. Pedro Santos", "Dra. Ana Costa", "Dr. Lucas Almeida", "Dra. Fernanda Lima", "Dr. Rafael Souza", "Dra. Camila Rocha", 
                "Dr. Bruno Martins", "Dra. Juliana Ferreira","Dr. Felipe Ribeiro", "Dra. Mariana Gomes", "Dr. Gustavo Carvalho", "Dra. Larissa Mendes",
                "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira"
  ],
  Ortopedia: ["Dr. Lucas Almeida", "Dra. Fernanda Lima", "Dr. Rafael Souza", "Dra. Camila Rocha", "Dr. Bruno Martins", "Dra. Juliana Ferreira", "Dr. Felipe Ribeiro", "Dra. Mariana Gomes",
              "Dr. Gustavo Carvalho", "Dra. Larissa Mendes", "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira",
              "Dr. Eduardo Farias", "Dra. Renata Barros"
  ], 
  Neurologia: ["Dr. Rafael Souza", "Dra. Camila Rocha", "Dr. Bruno Martins", "Dra. Juliana Ferreira", "Dr. Felipe Ribeiro", "Dra. Mariana Gomes", "Dr. Gustavo Carvalho", "Dra. Larissa Mendes",
               "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira","Dr. Eduardo Farias", "Dra. Renata Barros",
               "Dr. Marcelo Tavares", "Dra. Aline Monteiro"
  ],
  Ginecologia: ["Dr. Bruno Martins", "Dra. Juliana Ferreira", "Dr. Felipe Ribeiro", "Dra. Mariana Gomes", "Dr. Gustavo Carvalho", "Dra. Larissa Mendes", "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes",
                "Dr. André Pires", "Dra. Vanessa Teixeira","Dr. Eduardo Farias", "Dra. Renata Barros","Dr. Marcelo Tavares", "Dra. Aline Monteiro",
                "Dr. Vinícius Cardoso", "Dra. Beatriz Cunha"
  ],
  Pediatria: ["Dr. Felipe Ribeiro", "Dra. Mariana Gomes", "Dr. Gustavo Carvalho", "Dra. Larissa Mendes", "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira",
              "Dr. Eduardo Farias", "Dra. Renata Barros","Dr. Marcelo Tavares", "Dra. Aline Monteiro","Dr. Vinícius Cardoso", "Dra. Beatriz Cunha",
              "Dr. Thiago Moreira", "Dra. Camila Figueiredo"
  ],
  Psiquiatria: ["Dr. Gustavo Carvalho", "Dra. Larissa Mendes", "Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira","Dr. Eduardo Farias", "Dra. Renata Barros",
                "Dr. Marcelo Tavares", "Dra. Aline Monteiro","Dr. Vinícius Cardoso", "Dra. Beatriz Cunha","Dr. Thiago Moreira", "Dra. Camila Figueiredo",
                "Dr. Daniel Castro", "Dra. Larissa Albuquerque"
  ],
Endocrinologia: ["Dr. Ricardo Azevedo", "Dra. Patrícia Nunes","Dr. André Pires", "Dra. Vanessa Teixeira","Dr. Eduardo Farias", "Dra. Renata Barros","Dr. Marcelo Tavares", "Dra. Aline Monteiro",
                 "Dr. Vinícius Cardoso", "Dra. Beatriz Cunha","Dr. Thiago Moreira", "Dra. Camila Figueiredo","Dr. Daniel Castro", "Dra. Larissa Albuquerque",
                 "Dr. Rodrigo Lima", "Dra. Juliana Teixeira"
  ],
  Oftalmologia: ["Dr. André Pires", "Dra. Vanessa Teixeira", "Dr. Eduardo Farias", "Dra. Renata Barros","Dr. Marcelo Tavares", "Dra. Aline Monteiro","Dr. Vinícius Cardoso", "Dra. Beatriz Cunha",
                 "Dr. Thiago Moreira", "Dra. Camila Figueiredo","Dr. Daniel Castro", "Dra. Larissa Albuquerque","Dr. Rodrigo Lima", "Dra. Juliana Teixeira",
                 "Dr. Felipe Rocha", "Dra. Mariana Oliveira"
  ],
  Gastroenterologia: ["Dr. Eduardo Farias", "Dra. Renata Barros","Dr. Marcelo Tavares", "Dra. Aline Monteiro","Dr. Vinícius Cardoso", "Dra. Beatriz Cunha","Dr. Thiago Moreira", "Dra. Camila Figueiredo",
                      "Dr. Daniel Castro", "Dra. Larissa Albuquerque","Dr. Rodrigo Lima", "Dra. Juliana Teixeira","Dr. Felipe Rocha", "Dra. Mariana Oliveira","Dra.Gabrielly Mariano", "Dr. Gustavo Henrique"
  ],
  Urologia: ["Dr. Marcelo Tavares", "Dra. Aline Monteiro", "Dr. Vinícius Cardoso", "Dra. Beatriz Cunha","Dr. Thiago Moreira", "Dra. Camila Figueiredo","Dr. Daniel Castro", "Dra. Larissa Albuquerque","Dr. Rodrigo Lima", "Dra. Juliana Teixeira",
             "Dr. Felipe Rocha", "Dra. Mariana Oliveira","Dra.Gabrielly Mariano", "Dr. Gustavo Henrique", "Dr. Rafael Almeida", "Dra. Larissa Martins"
  ],
  Reumatologia: ["Dr. Vinícius Cardoso", "Dra. Beatriz Cunha", "Dr. Thiago Moreira", "Dra. Camila Figueiredo","Dr. Daniel Castro", "Dra. Larissa Albuquerque","Dr. Rodrigo Lima", "Dra. Juliana Teixeira","Dr. Felipe Rocha", "Dra. Mariana Oliveira",
                 "Dra.Gabrielly Mariano", "Dr. Gustavo Henrique", "Dr. Rafael Almeida", "Dra. Larissa Martins","Dr. Bruno Costa", "Dra. Fernanda Lima"
  ],
  Otorrinolaringologia: ["Dr. Thiago Moreira", "Dra. Camila Figueiredo", "Dr. Daniel Castro", "Dra. Larissa Albuquerque","Dr. Rodrigo Lima", "Dra. Juliana Teixeira","Dr. Felipe Rocha", "Dra. Mariana Oliveira","Dra.Gabrielly Mariano", "Dr. Gustavo Henrique",
                         "Dr. Rafael Almeida", "Dra. Larissa Martins","Dr. Bruno Costa", "Dra. Fernanda Lima","Dr. Lucas Pereira", "Dra. Mariana Rocha"
  ],
  Nefrologia: ["Dr. Daniel Castro", "Dra. Larissa Albuquerque", "Dr. Rodrigo Lima", "Dra. Juliana Teixeira","Dr. Felipe Rocha", "Dra. Mariana Oliveira","Dra.Gabrielly Mariano", "Dr. Gustavo Henrique","Dr. Rafael Almeida", "Dra. Larissa Martins",
               "Dr. Bruno Costa", "Dra. Fernanda Lima","Dr. Lucas Pereira", "Dra. Mariana Rocha","Dr. Rafael Moreira", "Dra. Camila Santos"
  ],
  Hematologia: ["Dr. Rodrigo Lima", "Dra. Juliana Teixeira", "Dr. Felipe Rocha", "Dra. Mariana Oliveira","Dra.Gabrielly Mariano", "Dr. Gustavo Henrique","Dr. Rafael Almeida", "Dra. Larissa Martins","Dr. Bruno Costa", "Dra. Fernanda Lima",
                "Dr. Lucas Pereira", "Dra. Mariana Rocha","Dr. Rafael Moreira", "Dra. Camila Santos","Dr. Eduardo Nunes", "Dra. Larissa Figueiredo"
  ],
  Oncologia: ["Dr. Felipe Rocha", "Dra. Mariana Oliveira", "Dra.Gabrielly Mariano", "Dr. Gustavo Henrique","Dr. Rafael Almeida", "Dra. Larissa Martins","Dr. Bruno Costa", "Dra. Fernanda Lima","Dr. Lucas Pereira", "Dra. Mariana Rocha",
              "Dr. Rafael Moreira", "Dra. Camila Santos","Dr. Eduardo Nunes", "Dra. Larissa Figueiredo","Dr. Vinícius Almeida", "Dra. Mariana Costa"
  ],
};

const disponibilidade: Record<string, Record<string, string[]>> = {
  "Dr. João Silva": {
    "2026-11-17": ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30"],
    "2026-11-19": ["08:00", "09:30", "11:00"],
    "2026-11-23": ["07:30", "08:30", "10:00"],
    "2026-12-02": ["08:00", "09:00", "10:30"],
  },
  "Dra. Maria Oliveira": {
    "2026-11-18": ["08:30", "09:30", "13:30"],
    "2026-11-20": ["07:00", "08:00", "09:00"],
    "2026-11-24": ["10:00", "11:00", "14:00"],
    "2026-12-03": ["07:30", "09:30", "11:00"],
  },
  "Dr. Carlos Pereira": {
    "2026-11-17": ["08:30", "10:00"],
    "2026-11-21": ["07:00", "09:30", "13:30"],
    "2026-11-25": ["08:00", "10:00", "11:00"],
    "2026-12-01": ["07:30", "09:00", "10:30"],
  },
  "Dr. Juan Pablo": {
    "2026-11-17": ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30"],
    "2026-11-19": ["08:00", "09:30", "11:00"],
    "2026-11-23": ["07:30", "08:30", "10:00"],
    "2026-12-02": ["08:00", "09:00", "10:30"],
  },
  "Dr. Felipe Ribeiro":{
    "2026-11-17": ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30"],
    "2026-11-19": ["08:00", "09:30", "11:00"],
    "2026-11-23": ["07:30", "08:30", "10:00"],
    "2026-12-02": ["08:00", "09:00", "10:30"],
  },
  "Dr. Rafael Souza":{
    "2026-11-18": ["08:30", "09:30", "13:30"],
    "2026-11-20": ["07:00", "08:00", "09:00"],
    "2026-11-24": ["10:00", "11:00", "14:00"],
    "2026-12-03": ["07:30", "09:30", "11:00"],
  },
  "Dr. Lucas Almeida":{
    "2026-11-17": ["08:30", "10:00"],
    "2026-11-21": ["07:00", "09:30", "13:30"],
    "2026-11-25": ["08:00", "10:00", "11:00"],
    "2026-12-01": ["07:30", "09:00", "10:30"],
  },
  "Dra. Fernanda Costa":{
    "2026-11-17": ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30"],
    "2026-11-19": ["08:00", "09:30", "11:00"],
    "2026-11-23": ["07:30", "08:30", "10:00"],
    "2026-12-02": ["08:00", "09:00", "10:30"],
  },
  
};

function chaveData(data: Date) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

export default function AgendarConsulta1() {
  const [etapaAtualId, setEtapaAtualId] = useState(1);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<string | null>(null);
  const [medicoSelecionado, setMedicoSelecionado] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);
  const [dataSelecionada, setDataSelecionada] = useState<string | null>(null);
  const [mesVisivel, setMesVisivel] = useState(() => {
    const hoje = new Date();
    return new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  });

  const ano = mesVisivel.getFullYear();
  const mes = mesVisivel.getMonth();
  const totalDiasNoMes = new Date(ano, mes + 1, 0).getDate();
  const primeiroDiaDaSemana = new Date(ano, mes, 1).getDay();
  const celulasCalendario = Array.from(
    { length: primeiroDiaDaSemana + totalDiasNoMes },
    (_, indice) => indice < primeiroDiaDaSemana ? null : indice - primeiroDiaDaSemana + 1,
  );
  const hoje = chaveData(new Date());
  const horariosDisponiveis = medicoSelecionado && dataSelecionada
    ? disponibilidade[medicoSelecionado]?.[dataSelecionada] ?? []
    : [];

  const medicosDisponiveis = especialidadeSelecionada
  ? medicosPorEspecialidade[especialidadeSelecionada] ?? []
  : [];

  const podeAvancar =
    (etapaAtualId === 1 && especialidadeSelecionada !== null) ||
    (etapaAtualId === 2 && medicoSelecionado !== null) ||
    (etapaAtualId === 3 && horarioSelecionado !== null);

  const selecionarOpcao = (opcao: string, selecionada: boolean) => {
    const classes = selecionada
      ? "border-ceu bg-ceu font-bold text-white"
      : "border-gray7 bg-iconesTopBar text-steelBlue hover:bg-[#e3edf8]";

    return (
      <button
        key={opcao}
        type="button"
        aria-pressed={selecionada}
        onClick={() => {
          if (etapaAtualId === 1) {
            setEspecialidadeSelecionada(opcao);
            setMedicoSelecionado(null);
}
          if (etapaAtualId === 2) setMedicoSelecionado(opcao);
          if (etapaAtualId === 3) setHorarioSelecionado(opcao);
        }}
        className={`min-h-[42px] rounded-lg border px-3 text-xs transition-colors ${classes}`}
      >
        {opcao}
      </button>
    );
  };

  return (
    <Layout title="Agendar Consulta">
      <section aria-labelledby="agendar-consulta-titulo">
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#d8e2f0] bg-white">
          <ol
            aria-label="Etapas do agendamento"
            className="grid min-w-[680px] grid-cols-4"
          >
            {etapas.map((etapa, index) => {
              const status: StatusEtapa =
                etapa.id < etapaAtualId
                  ? "concluida"
                  : etapa.id === etapaAtualId
                    ? "ativa"
                    : "pendente";

              return (
                <li
                  key={etapa.id}
                  aria-current={status === "ativa" ? "step" : undefined}
                  className={`flex min-h-[54px] items-center gap-3 px-5 ${
                    index < etapas.length - 1 ? "border-r border-gray7" : ""
                  } ${status === "ativa" ? "bg-iconesTopBar" : "bg-white"}`}
                >
                  <span
                    className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      status === "pendente"
                        ? "bg-iconesTopBar text-steelBlue"
                        : "bg-bic text-white"
                    }`}
                  >
                    {status === "concluida" ? "✓" : etapa.id}
                  </span>
                  <span
                    className={`whitespace-nowrap text-sm ${
                      status === "ativa"
                        ? "font-semibold text-bic"
                        : "text-gray5"
                    }`}
                  >
                    {etapa.titulo}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-6 rounded-xl border border-gray7 bg-white p-4 sm:p-6">
          <h1
            id="agendar-consulta-titulo"
            className="text-base font-bold text-marinho"
          >
            {etapaAtualId === 1 && "Selecione a Especialidade"}
            {etapaAtualId === 2 && "Escolha o Médico"}
            {etapaAtualId === 3 && "Data e Horário"}
            {etapaAtualId === 4 && "Confirme seu agendamento"}
          </h1>

          {/*Etapa 1: Seleção de especialidade, exibindo as especialidades disponíveis*/}
          {etapaAtualId === 1 && (
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-4 md:gap-x-7">
              {especialidades.map((especialidade) =>
                selecionarOpcao(
                  especialidade,
                  especialidade === especialidadeSelecionada,
                ),
              )}
            </div>
          )}

          {/*Etapa 2: Seleção de médico, exibindo os médicos disponíveis para a especialidade selecionada*/}
          {etapaAtualId === 2 && (
            medicosDisponiveis.length === 0 ? (
              <p className="mt-5 text-sm text-steelBlue">
                Não há médicos cadastrados para esta especialidade.
              </p>
            ) : (
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
                {medicosDisponiveis.map((medico) => {
                  const selecionada = medico === medicoSelecionado;

                  return (
                    <button
                      key={medico}
                      type="button"
                      aria-pressed={selecionada}
                      onClick={() => {
                        setMedicoSelecionado(medico);
                        setDataSelecionada(null);
                        setHorarioSelecionado(null);
                      }}
                      className={`flex min-h-[42px] flex-col items-start justify-center rounded-lg border px-2 py-1 text-left transition-colors ${selecionada ? "border-ceu bg-ceu text-white" : "border-gray7 bg-iconesTopBar text-steelBlue hover:border-ceu hover:bg-[#e3edf8]"}`}
                    >
                      <span className="truncate text-[11px] font-medium leading-tight">{medico}</span>
                      <span className={`text-[10px] leading-tight ${selecionada ? "text-white/90" : "text-steelBlue"}`}>
                        {tituloEspecialidade[especialidadeSelecionada ?? ""] ?? especialidadeSelecionada} · <span role="img" aria-label="avaliação">⭐</span> 4.9
                        </span>
                    </button>
                  );
                })}
              </div>
            )
          )}

          {/* Etapa 3: calendário e horários disponíveis para o médico escolhido */}
          {etapaAtualId === 3 && (
            <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-sm font-semibold capitalize text-marinho">
                    {new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(mesVisivel)}
                  </h2>
                  <div className="flex gap-2">
                    <button type="button" aria-label="Mês anterior" onClick={() => { setMesVisivel(new Date(ano, mes - 1, 1)); setDataSelecionada(null); setHorarioSelecionado(null); }} className="flex size-8 items-center justify-center rounded-md bg-iconesTopBar text-bic hover:bg-[#e3edf8]">‹</button>
                    <button type="button" aria-label="Próximo mês" onClick={() => { setMesVisivel(new Date(ano, mes + 1, 1)); setDataSelecionada(null); setHorarioSelecionado(null); }} className="flex size-8 items-center justify-center rounded-md bg-ceu text-white hover:opacity-90">›</button>
                  </div>
                </div>

                <div className="grid grid-cols-7 text-center text-xs text-steelBlue">
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, indice) => <span key={`${dia}-${indice}`} className="py-2 font-medium">{dia}</span>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {celulasCalendario.map((dia, indice) => {
                    if (dia === null) return <span key={`vazio-${indice}`} />;
                    const chave = chaveData(new Date(ano, mes, dia));
                    const temHorario = Boolean(disponibilidade[medicoSelecionado ?? ""]?.[chave]?.length);
                    const desabilitada = chave < hoje || !temHorario;
                    const selecionada = dataSelecionada === chave;
                    return (
                      <button key={chave} type="button" disabled={desabilitada} aria-pressed={selecionada} onClick={() => { setDataSelecionada(chave); setHorarioSelecionado(null); }} className={`rounded-md py-2 text-xs transition-colors ${selecionada ? "bg-ceu text-white" : "text-steelBlue hover:bg-iconesTopBar"} disabled:cursor-not-allowed disabled:opacity-30`}>
                        {dia}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="mb-1 text-sm font-semibold capitalize text-marinho">
                  {dataSelecionada ? new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${dataSelecionada}T12:00:00`)) : "Selecione uma data"}
                </h2>
                <p className="mb-3 text-xs text-gray5">Horários disponíveis</p>
                {horariosDisponiveis.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {horariosDisponiveis.map((horario) => selecionarOpcao(horario, horario === horarioSelecionado))}
                  </div>
                ) : (
                  <p className="text-xs text-steelBlue">{dataSelecionada ? "Não há horários disponíveis nesta data." : "Escolha um dia marcado no calendário."}</p>
                )}
              </div>
            </div>
          )}

          {etapaAtualId === 4 && (
            <dl className="mt-5 space-y-3 text-sm text-steelBlue">
              <div>
                <dt className="font-semibold">Especialidade</dt>
                <dd>{especialidadeSelecionada}</dd>
              </div>
              <div>
                <dt className="font-semibold">Médico</dt>
                <dd>{medicoSelecionado}</dd>
              </div>
              <div>
                <dt className="font-semibold">Data</dt>
                <dd>{dataSelecionada ? new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${dataSelecionada}T00:00:00Z`)) : "Não selecionada"}</dd>
              </div>
              <div>
                <dt className="font-semibold">Horário</dt>
                <dd>{horarioSelecionado}</dd>
              </div>
            </dl>
          )}

          <div className="mt-7 flex gap-3">
            {etapaAtualId > 1 && (
              <button
                type="button"
                onClick={() => setEtapaAtualId((atual) => atual - 1)}
                className="rounded-2xl border border-black bg-white mt-8 px-4 py-1 text-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                Voltar
              </button>
            )}
            {etapaAtualId < etapas.length && (
              <button
                type="button"
                onClick={() => setEtapaAtualId((atual) => atual + 1)}
                disabled={!podeAvancar}
                className="rounded-2xl bg-ceu mt-8 px-4 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Próximo
              </button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
