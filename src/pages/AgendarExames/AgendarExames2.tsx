import { Link, useLocation } from "react-router-dom";
import Layout from "@components/Layout";

type Booking = { exam?: string; unit?: string; date?: string; time?: string };

export default function AgendarExames2() {
  const location = useLocation();
  const booking = (location.state as Booking | null) ?? {};
  const date = booking.date ? new Date(booking.date) : new Date(2026, 9, 19, 7, 30);
  const dateLabel = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric", month: "long", year: "numeric",
  }).format(date);

  return (
    <Layout title="Agendar exames">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-marinho">Agendar Exames</h2>
          <p className="mt-1 text-sm text-gray5">Selecione os exames e escolha data e local de coleta</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-borda bg-white px-4 py-3 text-xs font-bold text-safira sm:px-6 sm:py-4">
          {(["Exame e unidade", "Data e horário", "Confirmação"]).map((step) => (
            <div key={step} className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-bic text-[11px] text-white" aria-hidden="true">✓</span>
              {step}
            </div>
          ))}
        </div>

        <section className="rounded-2xl border border-borda bg-white px-4 py-7 text-center sm:px-8 sm:py-8">
          <h3 className="text-lg font-extrabold text-marinho">1 exame(s) agendado(s)</h3>
          <p className="mt-3 text-xs text-gray5">{dateLabel}, às {booking.time ?? "07h30"} - {booking.unit ?? "Laboratório Centro"}</p>
          <Link to="/agendar-exames1" className="mt-4 flex min-h-10 w-full items-center justify-center rounded-lg bg-ceu px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-safira">
            Novo Agendamento
          </Link>
          <p className="mt-3 text-[10px] text-safira">Acompanhe a reserva em Meus agendamentos.</p>
        </section>

        <div className="flex items-center justify-center gap-3 rounded-xl border border-borda bg-fundo px-4 py-3 text-center text-xs text-safira">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-bic text-white"><i className="bi bi-file-earmark-medical" aria-hidden="true" /></span>
          <span>Seus documentos liberados ficam em<br className="sm:hidden" /> <strong>Resultados de exames.</strong></span>
        </div>
        <footer className="pt-1 text-center text-[10px] text-gray5/60">Ambiente demonstrativo · Todos os dados são fictícios. | Privacidade · Acessibilidade · Ajuda</footer>
      </div>
    </Layout>
  );
}
