import { useState } from "react";
import Layout from "@components/Layout";

type StatusEtapa = "pendente" | "ativa" | "concluida";

type Etapa = {
  id: number;
  titulo: string;
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

const medicosPorEspecialidade: Record<string, string[]> = {
  //O string[] serve para colocar os nomes dos médicos como uma lista, e ele vai perrcorer a lista de especialidades e colocar os médicos que pertencem a cada especialidade
  Cardiologia: ["Dr. João Silva", "Dra. Maria Oliveira", "Dr. Carlos Pereira", "Dra. Fernanda Costa", "Dr. Lucas Almeida", "Dra. Ana Souza",
                "Dr. Pedro Santos", "Dra. Juliana Lima", "Dr. Rafael Rocha", "Dra. Camila Martins","Dr. Bruno Ferreira", "Dra. Mariana Gomes",
                "Dr. Felipe Ribeiro", "Dra. Larissa Mendes", "Dr. Gustavo Carvalho"
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


const horarios = ["08:00", "09:30", "11:00", "13:30", "15:00", "16:30"];

export default function AgendarConsulta1() {
  const [etapaAtualId, setEtapaAtualId] = useState(1);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<
    string | null
  >(null);
  const [medicoSelecionado, setMedicoSelecionado] = useState<string | null>(
    null,
  );
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(
    null,
  );

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
            {etapaAtualId === 3 && "Escolha o Horário"}
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
              <div className="mt-5 grid grid-cols-2 gap-7 md:grid-cols-4">
                {medicosDisponiveis.map((medico) =>
                  selecionarOpcao(medico, medico === medicoSelecionado),
                )}
              </div>
            )
          )}

          {/*Etapa 3: Seleção de horário, exibindo os horários disponíveis para o médico selecionado*/}
          {etapaAtualId === 3 && (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {horarios.map((horario) =>
                selecionarOpcao(horario, horario === horarioSelecionado),
              )}
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
