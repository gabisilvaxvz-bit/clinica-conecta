import { useMemo, useState } from "react";
import Layout from "@components/Layout";

type ExamResult = {
  id: number;
  name: string;
  collected: string;
  location: string;
  released?: string;
  status: "Disponível" | "Em processamento";
  size?: string;
  note: string;
};

const results: ExamResult[] = [
  { id: 1, name: "Hemograma completo", collected: "2026-10-08", location: "Unidade Jardins", released: "09 out", status: "Disponível", size: "320 KB", note: "Prévia conceitual. Dados laboratoriais e laudos clínicos não são apresentados neste example." },
  { id: 2, name: "Glicemia de jejum", collected: "2026-10-08", location: "Unidade Jardins", released: "09 out", status: "Disponível", size: "180 KB", note: "Prévia conceitual. Dados laboratoriais e laudos clínicos não são apresentados neste example." },
  { id: 3, name: "Ultrassonografia de abdômen", collected: "2026-10-14", location: "Unidade Jardins", status: "Em processamento", note: "Você será avisada quando o documento estiver disponível." },
];

const dateLabel = (value: string) => new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit", month: "long", year: "numeric",
}).format(new Date(`${value}T12:00:00`));

export default function MeusAgendamentos() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos os status");
  const [period, setPeriod] = useState("Últimos 6 meses");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [printResult, setPrintResult] = useState(results[0]);

  const visibleResults = useMemo(() => results.filter((result) => {
    const matchesQuery = result.name.toLocaleLowerCase("pt-BR").includes(query.trim().toLocaleLowerCase("pt-BR"));
    const matchesStatus = status === "Todos os status" || result.status === status;
    const ageInDays = (Date.now() - new Date(`${result.collected}T12:00:00`).getTime()) / 86400000;
    const matchesPeriod = period === "Todos os períodos" || (period === "Últimos 3 meses" ? ageInDays <= 92 : ageInDays <= 184);
    return matchesQuery && matchesStatus && matchesPeriod;
  }), [query, status, period]);

  const selected = visibleResults.find((result) => result.id === selectedId);
  const availableCount = visibleResults.filter((result) => result.status === "Disponível").length;
  const download = (result: ExamResult) => {
    setPrintResult(result);
    window.setTimeout(() => window.print(), 0);
  };

  return (
    <Layout title="Resultados de exames">
      <style>{`@media print { body * { visibility: hidden !important; } #result-print, #result-print * { visibility: visible !important; } #result-print { display: block !important; position: absolute; inset: 0 auto auto 0; width: 100%; border: 0; box-shadow: none; } .result-no-print { display: none !important; } }`}</style>
      <div className="w-full space-y-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-marinho">Resultados de Exames</h2>
          <p className="mt-1 text-sm text-gray5">Acesse seus laudos com segurança e privacidade.</p>
        </div>

        <p className="flex items-center gap-2.5 px-2 py-1 text-[11px] leading-relaxed text-safira"><span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-bic text-white"><i className="bi bi-info-lg" aria-hidden="true" /></span>Resultados precisam ser avaliados no contexto do seu cuidado. Este portal não substitui a conversa com um profissional de saúde.</p>

        <div className="result-no-print grid gap-3 md:grid-cols-[minmax(0,1fr)_170px_170px]">
          <label className="relative block"><span className="sr-only">Buscar exame</span><i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray5" aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite o nome do exame" className="w-full rounded-lg border border-borda bg-white py-3 pl-9 pr-3 text-xs text-marinho outline-none placeholder:text-gray5 focus:border-bic focus:ring-2 focus:ring-bic/10" /></label>
          <label className="relative block"><span className="sr-only">Filtrar por status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full appearance-none rounded-lg border border-borda bg-white px-3 py-3 pr-9 text-xs text-gray2 outline-none focus:border-bic"><option>Todos os status</option><option>Disponível</option><option>Em processamento</option></select><i className="bi bi-chevron-down pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray5" aria-hidden="true" /></label>
          <label className="relative block"><span className="sr-only">Filtrar por período</span><select value={period} onChange={(event) => setPeriod(event.target.value)} className="w-full appearance-none rounded-lg border border-borda bg-white px-3 py-3 pr-9 text-xs text-gray2 outline-none focus:border-bic"><option>Últimos 6 meses</option><option>Últimos 3 meses</option><option>Todos os períodos</option></select><i className="bi bi-chevron-down pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray5" aria-hidden="true" /></label>
        </div>

        <div className={selected ? "grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_340px]" : "block"}>
          <section aria-label="Lista de resultados de exames" className="result-no-print">
            <p className="mb-3 text-xs font-semibold text-gray5">{visibleResults.length} exames · {availableCount} resultados disponíveis</p>
            <div className="space-y-3">
              {visibleResults.map((result) => {
                const isSelected = selected?.id === result.id;
                return <article key={result.id} className="rounded-xl border border-borda bg-white p-4 transition-colors hover:border-bic focus-within:border-bic">
                  <button type="button" onClick={() => setSelectedId(result.id)} aria-pressed={isSelected} className="w-full text-left">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-sm font-extrabold text-marinho"><span className={`flex size-7 items-center justify-center rounded-lg ${result.status === "Disponível" ? "bg-iconesTopBar text-bic" : "bg-iconesTopBar text-ceu"}`}><i className={`bi ${result.status === "Disponível" ? "bi-file-earmark-medical" : "bi-clock"}`} aria-hidden="true" /></span>{result.name}</span>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${result.status === "Disponível" ? "bg-bic text-white" : "bg-iconesTopBar text-gray5"}`}>{result.status}</span>
                    </div>
                    <p className="mt-3 text-[10px] text-gray5">{result.status === "Disponível" ? "Coleta" : "Realizado em"} {dateLabel(result.collected)} · {result.location}</p>
                    {result.released && <p className="mt-0.5 text-[10px] text-gray5">Liberado em {result.released} · PDF · {result.size}</p>}
                    {result.status === "Em processamento" && <p className="mt-0.5 text-[10px] text-gray5">Previsão de liberação: 16 out 2026</p>}
                  </button>
                  {result.status === "Disponível" ? <div className="mt-3 flex items-center gap-3">
                    <button type="button" onClick={() => setSelectedId(result.id)} className={`text-[10px] font-bold ${isSelected ? "text-bic" : "text-gray5 hover:text-bic"}`}><i className="bi bi-eye mr-1" aria-hidden="true" />{isSelected ? "Documento selecionado" : "Visualizar documento"}</button>
                    <button type="button" onClick={() => download(result)} className="text-[10px] font-bold text-bic hover:underline"><i className="bi bi-download mr-1" aria-hidden="true" />Baixar PDF</button>
                  </div> : <p className="mt-3 text-[10px] text-gray5"><i className="bi bi-bell mr-1.5 text-ceu" aria-hidden="true" />Você será avisada quando o documento estiver disponível.</p>}
                </article>;
              })}
              {visibleResults.length === 0 && <p className="rounded-xl border border-borda bg-white px-5 py-10 text-center text-sm text-gray5">Nenhum exame encontrado com esses filtros.</p>}
            </div>
          </section>

          {selected && <aside className="rounded-xl border border-borda bg-white p-4">
            <div className="flex items-center justify-between"><h3 className="text-sm font-extrabold text-marinho">Seu documento</h3><button type="button" onClick={() => setDocumentOpen(true)} aria-label="Ampliar documento" className="flex size-8 items-center justify-center rounded-lg bg-iconesTopBar text-bic hover:bg-borda"><i className="bi bi-arrows-angle-expand" aria-hidden="true" /></button></div>
            <div className="mt-3 rounded-lg border border-borda bg-iconesTopBar p-3">
              <div className="flex items-center gap-2 border-b border-borda pb-2 text-[10px] font-extrabold text-bic"><span className="flex size-5 items-center justify-center rounded bg-bic text-white"><i className="bi bi-link-45deg" aria-hidden="true" /></span>CONECTA</div>
              <h4 className="mt-3 text-[11px] font-extrabold text-marinho">{selected.name === "Hemograma completo" ? "Ultrasson Abdominal" : selected.name}</h4>
              <p className="mt-3 text-[9px] text-gray5">Paciente</p><p className="text-[10px] font-bold text-marinho">Milena Mattos</p>
              <p className="mt-2 text-[9px] text-gray5">Data da coleta</p><p className="text-[10px] font-bold text-marinho">{dateLabel(selected.collected)}</p>
              <div className="mt-3 rounded-md bg-white p-2.5"><p className="text-[9px] font-bold text-bic"><i className="bi bi-file-earmark-text mr-1" aria-hidden="true" />Nota</p><p className="mt-1 text-[8px] leading-relaxed text-gray5">{selected.note}</p></div>
              <p className="mt-3 text-[8px] text-gray5">Documento fictício · Página 1 de 1</p>
            </div>
            {selected.status === "Disponível" ? <>
              <button type="button" onClick={() => setDocumentOpen(true)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-ceu px-3 py-2.5 text-xs font-bold text-white hover:bg-safira"><i className="bi bi-box-arrow-up-right" aria-hidden="true" />Abrir documento</button>
              <button type="button" onClick={() => download(selected)} className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-borda bg-iconesTopBar px-3 py-2.5 text-xs font-bold text-bic hover:bg-borda"><i className="bi bi-download" aria-hidden="true" />Baixar PDF</button>
            </> : <p className="mt-3 rounded-lg bg-iconesTopBar p-3 text-center text-[10px] text-gray5"><i className="bi bi-clock mr-1.5" aria-hidden="true" />Documento em processamento. Avisaremos quando estiver disponível.</p>}
            <p className="mt-3 text-center text-[9px] text-gray5">Guarde seus documentos com cuidado e compartilhe apenas com quem você autorizar.</p>
          </aside>}
        </div>

        <section id="result-print" className="hidden rounded-xl border border-borda bg-white p-8 text-marinho"><p className="border-b border-borda pb-3 text-sm font-extrabold text-bic">CONECTA · Resultado de exame</p><h2 className="mt-5 text-2xl font-extrabold">{printResult.name}</h2><p className="mt-5 text-xs text-gray5">Paciente</p><p className="text-sm font-bold">Milena Mattos</p><p className="mt-4 text-xs text-gray5">Data da coleta</p><p className="text-sm font-bold">{dateLabel(printResult.collected)} · {printResult.location}</p><div className="mt-6 rounded-lg bg-iconesTopBar p-4 text-sm">{printResult.note}</div><p className="mt-8 text-[10px] text-gray5">Documento demonstrativo · Dados fictícios.</p></section>
        <footer className="pt-1 text-center text-[10px] text-gray5/60">Ambiente demonstrativo · Todos os dados são fictícios. | Privacidade · Acessibilidade · Ajuda</footer>
      </div>
      {documentOpen && selected?.status === "Disponível" && <div role="presentation" onClick={() => setDocumentOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-marinho/50 p-4"><section role="dialog" aria-modal="true" aria-labelledby="document-title" onClick={(event) => event.stopPropagation()} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"><div className="flex items-start justify-between"><div><p className="text-xs font-bold text-bic">CONECTA · Resultado de exame</p><h2 id="document-title" className="mt-2 text-xl font-extrabold text-marinho">{selected.name}</h2></div><button type="button" onClick={() => setDocumentOpen(false)} aria-label="Fechar documento" className="flex size-8 items-center justify-center rounded-lg bg-iconesTopBar text-bic"><i className="bi bi-x-lg" aria-hidden="true" /></button></div><p className="mt-5 text-xs text-gray5">Paciente</p><p className="text-sm font-bold text-marinho">Milena Mattos</p><p className="mt-4 text-xs text-gray5">Coleta em {dateLabel(selected.collected)} · {selected.location}</p><p className="mt-5 rounded-lg bg-iconesTopBar p-4 text-sm leading-relaxed text-safira">{selected.note}</p><button type="button" onClick={() => download(selected)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-ceu px-4 py-3 text-sm font-bold text-white hover:bg-safira"><i className="bi bi-download" aria-hidden="true" />Baixar PDF</button></section></div>}
    </Layout>
  );
}
