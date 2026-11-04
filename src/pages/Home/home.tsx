import Layout from "../../components/Layout";
import { CardHome } from "../../components/CardHome";
import {Link} from "react-router-dom";

const kpis = [
  { valor: "15 Out", titulo: "Próxima Consulta", descricao: "Dr. Carlos Mendes - Cardio", icone: "bi-calendar" },
  { valor: "3", titulo: "Exames Pendentes", descricao: "Aguardando resultado", icone: "bi-droplet" },
  { valor: "02", titulo: "Encaminhamentos", descricao: "Ativos este mês", icone: "bi-send" },
  { valor: "#5", titulo: "Posição na Fila", descricao: "Veja as orientações do profissional", icone: "bi-people" },
];

const consultas = [
  { mes: "OUT", dia: "19", semana: "SEG", especialidade: "Cardiologia", profissional: "Dr. Carlos Mendes", horario: "09h30 · Presencial", status: "Confirmado" },
  { mes: "OUT", dia: "26", semana: "SEG", especialidade: "Dermatologia", profissional: "Dra. Ana Ribeiro", horario: "09h30 · Presencial", status: "Pendente" },
  { mes: "NOV", dia: "02", semana: "SEG", especialidade: "Ortopedia", profissional: "Dra. Paula Faria", horario: "09h30 · Presencial", status: "Confirmado" },
];

const resultados = [
  { nome: "Hemograma Completo", data: "02 Out 2026", icone: "bi-check-lg", pendente: false },
  { nome: "Glicemia em Jejum", data: "02 Out 2026", icone: "bi-exclamation-lg", pendente: true },
  { nome: "Raio-X Tórax", data: "28 Set 2026", icone: "bi-check-lg", pendente: false },
];

const atalhos = [
  { texto: "Agendar Consulta", icone: "bi-calendar", to: "/agendar-consulta1" },
  { texto: "Agendar Exames", icone: "bi-prescription2", to: "/agendar-exames1" },
  { texto: "Encaminhamentos", icone: "bi-send", to: "#" },
  { texto: "Fila Online", icone: "bi-people", to: "#" },
];

export default function Home() {
  return (
    <Layout title="Visão Geral">
      <section className="space-y-3 rounded-2xl bg-ceu p-5 sm:p-7">
        <p className="text-lg font-semibold text-marinho">Bom dia, Milena Mattos!</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Tudo Conectado, do seu jeito.</h2>
        <p className="max-w-2xl text-sm text-white sm:text-base">
          Você tem <span className="font-semibold">1 consulta esta semana e 3 resultados</span> de exames disponíveis.
        </p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
          <button className="flex items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 font-semibold text-bic transition hover:bg-fundo sm:py-2">
            <i className="bi bi-calendar-plus" aria-hidden="true"></i>
            <Link to="/agendar-consulta1">Agendar Consulta</Link>
          </button>
          <button className="flex items-center justify-center gap-3 rounded-lg border border-dashed border-gray4 bg-baby px-4 py-3 font-semibold text-white transition hover:bg-bic sm:py-2">
            <i className="bi bi-people" aria-hidden="true"></i>
            Fila Online
          </button>
        </div>
      </section>

      <section aria-label="Resumo da sua conta" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => <CardHome key={kpi.titulo} {...kpi} />)}
      </section>

      <section className="rounded-2xl border border-borda bg-white p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-base font-extrabold text-marinho sm:text-lg">Próximas Consultas</h2>
          <a href="#" className="shrink-0 text-xs font-semibold text-bic hover:underline">Ver todas <span aria-hidden="true">›</span></a>
        </div>

        <div className="space-y-3">
          {consultas.map((consulta) => (
            <article key={`${consulta.mes}-${consulta.dia}-${consulta.especialidade}`} className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-[72px] w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-bic">
                <span className="text-[10px] font-medium text-baby">{consulta.mes}</span>
                <span className="text-2xl font-bold leading-tight text-white">{consulta.dia}</span>
                <span className="text-[10px] font-medium text-baby">{consulta.semana}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-marinho sm:text-base">{consulta.especialidade}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-gray5">
                  <i className="bi bi-person-fill text-bic" aria-hidden="true"></i>{consulta.profissional}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-gray5">
                  <i className="bi bi-clock-fill text-bic" aria-hidden="true"></i>{consulta.horario}
                </p>
              </div>
              <span className={`hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold sm:inline-flex ${consulta.status === "Pendente" ? "bg-orange-100 text-orange-700" : "bg-icone text-bic"}`}>
                {consulta.status}
              </span>
              <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold sm:hidden ${consulta.status === "Pendente" ? "bg-orange-100 text-orange-700" : "bg-icone text-bic"}`}>
                {consulta.status === "Pendente" ? "Pendente" : "OK"}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-borda bg-white p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-base font-extrabold text-marinho sm:text-lg">Resultados Recentes</h2>
          <a href="#" className="shrink-0 text-xs font-semibold text-bic hover:underline">Ver todos <span aria-hidden="true">›</span></a>
        </div>

        <div className="space-y-3">
          {resultados.map((resultado) => (
            <article key={resultado.nome} className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className={`flex size-14 shrink-0 items-center justify-center rounded-xl bg-bic text-2xl ${resultado.pendente ? "text-orange-300" : "text-white"}`}>
                <i className={`bi ${resultado.icone}`} aria-hidden="true"></i>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-marinho sm:text-base">{resultado.nome}</h3>
                <p className="mt-1 text-xs text-gray5">{resultado.data}</p>
              </div>
              <a href="#" aria-label={`Abrir PDF: ${resultado.nome}`} className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${resultado.pendente ? "bg-orange-100 text-orange-700" : "bg-icone text-bic"}`}>
                PDF
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Ações rápidas" className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {atalhos.map((atalho) => (
          <Link key={atalho.texto} to={atalho.to} className="flex min-h-14 items-center gap-3 rounded-xl border border-borda bg-white p-3 text-sm font-semibold text-marinho transition hover:border-bic hover:bg-icone">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-icone text-bic">
              <i className={`bi ${atalho.icone}`} aria-hidden="true"></i>
            </span>
            <span className="min-w-0 flex-1">{atalho.texto}</span>
            <i className="bi bi-arrow-up-right-circle text-bic" aria-hidden="true"></i>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
