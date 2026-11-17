import { useMemo, useState } from "react";
import Layout from "@components/Layout";

type Referral = {
  id: number;
  kind: "Pedido de exames" | "Encaminhamento para consulta";
  title: string;
  doctor: string;
  date: string;
  status: "Agendado" | "Realizado";
  exams?: string[];
  note: string;
};

const referrals: Referral[] = [
  {
    id: 1, kind: "Pedido de exames", title: "Exames laboratoriais",
    doctor: "Dra. Beatriz Santos · Clínica médica", date: "2026-10-05", status: "Agendado",
    exams: ["Ultrasson Abdominal", "Glicemia de jejum"],
    note: "Confirme a disponibilidade e o preparo com a unidade. O pedido deve ser conferido pela equipe antes da realização.",
  },
  {
    id: 2, kind: "Encaminhamento para consulta", title: "Consulta de cardiologia",
    doctor: "Dra. Beatriz Santos · Clínica médica", date: "2026-10-05", status: "Agendado",
    note: "Apresente este encaminhamento na unidade de cardiologia. Entre em contato com a recepção para confirmar o horário.",
  },
  {
    id: 3, kind: "Encaminhamento para consulta", title: "Acompanhamento nutricional",
    doctor: "Dr. Lucas Almeida · Clínica médica", date: "2026-08-12", status: "Realizado",
    note: "Encaminhamento realizado. Consulte a equipe de saúde caso precise de um novo pedido.",
  },
];

const formatDate = (value: string) => new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit", month: "long", year: "numeric",
}).format(new Date(`${value}T12:00:00`));

export default function MeusEncaminhamentos() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos os status");
  const [period, setPeriod] = useState("Últimos 6 meses");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [printReferral, setPrintReferral] = useState(referrals[0]);

  const downloadReferral = (referral: Referral) => {
    setPrintReferral(referral);
    window.setTimeout(() => window.print(), 0);
  };

  const visibleReferrals = useMemo(() => referrals.filter((referral) => {
    const text = `${referral.title} ${referral.kind} ${referral.doctor} ${referral.exams?.join(" ") ?? ""}`.toLocaleLowerCase("pt-BR");
    const matchesQuery = text.includes(query.trim().toLocaleLowerCase("pt-BR"));
    const matchesStatus = status === "Todos os status" || referral.status === status;
    const ageInDays = (Date.now() - new Date(`${referral.date}T12:00:00`).getTime()) / 86400000;
    const matchesPeriod = period === "Todos os períodos" || (period === "Últimos 3 meses" ? ageInDays <= 92 : ageInDays <= 184);
    return matchesQuery && matchesStatus && matchesPeriod;
  }), [query, status, period]);

  const selected = visibleReferrals.find((referral) => referral.id === selectedId);
  const scheduledCount = visibleReferrals.filter((referral) => referral.status === "Agendado").length;

  return (
    <Layout title="Meus encaminhamentos">
      <style>{`@media print { body * { visibility: hidden !important; } #referral-print, #referral-print * { visibility: visible !important; } #referral-print { display: block !important; position: absolute; inset: 0 auto auto 0; width: 100%; border: 0; box-shadow: none; } .referral-no-print { display: none !important; } }`}</style>
      <div className="mx-auto w-full max-w-[1320px] space-y-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-marinho">Meus encaminhamentos</h2>
          <p className="mt-1 text-sm text-gray5">Encaminhamentos emitidos pelos seus médicos na Clínica CONECTA.</p>
        </div>

        <div className="referral-no-print grid gap-3 md:grid-cols-[minmax(0,1fr)_190px_170px]">
          <label className="relative block">
            <span className="sr-only">Buscar encaminhamentos</span>
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray5" aria-hidden="true" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Especialidade, exame..." className="w-full rounded-lg border border-borda bg-white py-3 pl-9 pr-3 text-xs text-marinho outline-none placeholder:text-gray5 focus:border-bic focus:ring-2 focus:ring-bic/10" />
          </label>
          <label className="relative block">
            <span className="sr-only">Filtrar por status</span>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full appearance-none rounded-lg border border-borda bg-white px-3 py-3 pr-9 text-xs text-gray5 outline-none focus:border-bic">
              <option>Todos os status</option><option>Agendado</option><option>Realizado</option>
              </select><i className="bi bi-chevron-down pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray5" aria-hidden="true" />
          </label>
          <label className="relative block">
            <span className="sr-only">Filtrar por período</span>
              <select value={period} onChange={(event) => setPeriod(event.target.value)} className="w-full appearance-none rounded-lg border border-borda bg-white px-3 py-3 pr-9 text-xs text-gray5 outline-none focus:border-bic">
              <option>Últimos 6 meses</option><option>Últimos 3 meses</option><option>Todos os períodos</option>
              </select><i className="bi bi-chevron-down pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray5" aria-hidden="true" />
          </label>
        </div>

        <div className={selected ? "grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]" : "block"}>
          <section aria-label="Lista de encaminhamentos" className="referral-no-print">
            <div className="mb-3 flex items-center justify-between text-xs font-bold text-marinho">
              <span>{visibleReferrals.length} encaminhamentos encontrados</span>
              <span className="text-bic">{scheduledCount} agendado{scheduledCount === 1 ? "" : "s"}</span>
            </div>
            <div className="space-y-3">
              {visibleReferrals.map((referral) => {
                const isSelected = selected?.id === referral.id;
                return (
                  <article key={referral.id} className={`rounded-xl border border-borda bg-white p-4 transition-colors hover:border-bic focus-within:border-bic ${referral.status === "Realizado" ? "opacity-80" : ""}`}>
                    <button type="button" onClick={() => setSelectedId(referral.id)} aria-pressed={isSelected} className="w-full text-left">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] text-gray5"><i className={`bi ${referral.kind === "Pedido de exames" ? "bi-prescription2" : "bi-send"} mr-1.5 text-bic`} aria-hidden="true" />{referral.kind}</span>
                        <span className="rounded-full bg-iconesTopBar px-2.5 py-1 text-[10px] font-bold text-bic">{referral.status}</span>
                      </div>
                      <h3 className="mt-3 text-base font-extrabold text-marinho">{referral.title}</h3>
                      <p className="mt-1 text-[10px] text-gray5"><i className="bi bi-person-fill mr-1" aria-hidden="true" />{referral.doctor}</p>
                      <p className="mt-0.5 text-[10px] text-gray5"><i className="bi bi-calendar-event mr-1" aria-hidden="true" />Emitido em {formatDate(referral.date)}</p>
                    </button>
                    <div className="mt-3 flex items-center justify-between border-t border-borda pt-2.5">
                      <button type="button" onClick={() => setSelectedId(referral.id)} className={`text-[10px] font-bold ${isSelected ? "text-bic" : "text-gray5 hover:text-bic"}`}>
                        <i className="bi bi-eye mr-1" aria-hidden="true" />{isSelected ? "Detalhes selecionados" : "Ver detalhes →"}
                      </button>
                      <button type="button" onClick={() => downloadReferral(referral)} className="text-[10px] font-bold text-gray5 hover:text-bic"><i className="bi bi-download mr-1" aria-hidden="true" />Baixar pedido</button>
                    </div>
                  </article>
                );
              })}
              {visibleReferrals.length === 0 && <div className="rounded-xl border border-borda bg-white px-5 py-10 text-center text-sm text-gray5">Nenhum encaminhamento encontrado com esses filtros.</div>}
            </div>
          </section>

          {selected && <aside className="rounded-xl border border-borda bg-white p-5">
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-marinho">Detalhes do pedido</h3>
                <span className="flex size-8 items-center justify-center rounded-lg bg-iconesTopBar text-bic"><i className="bi bi-file-earmark-medical" aria-hidden="true" /></span>
              </div>
              <span className="mt-3 inline-flex rounded-full bg-iconesTopBar px-2.5 py-1 text-[10px] font-bold text-bic"><i className={`bi ${selected.kind === "Pedido de exames" ? "bi-prescription2" : "bi-send"} mr-1.5`} aria-hidden="true" />{selected.kind}</span>
              <Detail label="Paciente" value="Milena Mattos" />
              <Detail label="Solicitante" value={selected.doctor} />
              <Detail label="Emitido em" value={formatDate(selected.date)} />
              {selected.exams && <div className="mt-4 border-t border-borda pt-3">
                <h4 className="text-[11px] font-extrabold uppercase text-marinho">Exames solicitados</h4>
                <ul className="mt-2 space-y-1 text-xs text-gray5">{selected.exams.map((exam) => <li key={exam}><i className="bi bi-circle-fill mr-2 text-[6px] text-bic" aria-hidden="true" />{exam}</li>)}</ul>
              </div>}
              <p className="mt-4 rounded-lg bg-iconesTopBar p-3 text-[10px] leading-relaxed text-safira"><i className="bi bi-info-circle mr-2 text-bic" aria-hidden="true" />{selected.note}</p>
              <button type="button" onClick={() => downloadReferral(selected)} className="referral-no-print mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-borda bg-white px-3 py-2.5 text-xs font-bold text-bic transition-colors hover:bg-iconesTopBar"><i className="bi bi-download" aria-hidden="true" />Baixar pedido em PDF</button>
            </>
          </aside>}
        </div>
        <section id="referral-print" className="hidden rounded-xl border border-borda bg-white p-8 text-marinho">
          <div className="mb-6 border-b border-borda pb-4">
            <p className="text-xs font-bold uppercase tracking-wide text-bic">Clínica CONECTA · Encaminhamento</p>
            <h2 className="mt-2 text-2xl font-extrabold">{printReferral.title}</h2>
          </div>
          <Detail label="Tipo de pedido" value={printReferral.kind} />
          <Detail label="Paciente" value="Milena Mattos" />
          <Detail label="Solicitante" value={printReferral.doctor} />
          <Detail label="Emitido em" value={formatDate(printReferral.date)} />
          {printReferral.exams && <div className="mt-5"><p className="text-xs font-bold uppercase">Exames solicitados</p><ul className="mt-2 list-disc pl-5 text-sm">{printReferral.exams.map((exam) => <li key={exam}>{exam}</li>)}</ul></div>}
          <p className="mt-5 rounded-lg bg-iconesTopBar p-4 text-sm leading-relaxed">{printReferral.note}</p>
          <p className="mt-8 text-[10px] text-gray5">Documento demonstrativo · Todos os dados são fictícios.</p>
        </section>
        <footer className="pt-1 text-center text-[10px] text-gray5/60">Ambiente demonstrativo · Todos os dados são fictícios. | Privacidade · Acessibilidade · Ajuda</footer>
      </div>
    </Layout>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="mt-3"><p className="text-[9px] font-semibold uppercase text-gray5">{label}</p><p className="mt-0.5 text-xs font-bold text-marinho">{value}</p></div>;
}
