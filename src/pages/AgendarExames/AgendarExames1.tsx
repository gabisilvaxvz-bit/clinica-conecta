import { useMemo, useState } from "react";
import Layout from "@components/Layout";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
const times = ["07h00", "07h30", "08h00", "08h30", "09h00", "09h30"];
const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const catalog = [
  { name: "Ultrasson Abdominal", type: "Imagem", unit: "Laboratório Centro", address: "Rua das Acácias, 120" },
  { name: "Hemograma Completo", type: "Laboratorial", unit: "Laboratório Centro", address: "Rua das Acácias, 120" },
  { name: "Raio-X do Tórax", type: "Imagem", unit: "Unidade Vila Nova", address: "Av. Brasil, 450" },
  { name: "Glicemia em Jejum", type: "Laboratorial", unit: "Unidade Vila Nova", address: "Av. Brasil, 450" },
  { name: "Eletrocardiograma", type: "Imagem", unit: "Laboratório Centro", address: "Rua das Acácias, 120" },
];
const today = new Date();
today.setHours(0, 0, 0, 0);
const toDateKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
const sameDay = (a: Date, b: Date) => toDateKey(a) === toDateKey(b);

export default function AgendarExames1() {
  const [visibleMonth, setVisibleMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [examQuery, setExamQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState<(typeof catalog)[number] | null>(null);
  const [examMenuOpen, setExamMenuOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [unitFilter, setUnitFilter] = useState("Todas as unidades");

  const filteredExams = useMemo(() => catalog.filter(exam =>
    exam.name.toLocaleLowerCase("pt-BR").includes(examQuery.trim().toLocaleLowerCase("pt-BR")) &&
    (typeFilter === "Todos" || exam.type === typeFilter) &&
    (unitFilter === "Todas as unidades" || exam.unit === unitFilter)
  ), [examQuery, typeFilter, unitFilter]);
  const monthStart = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const firstWeekday = monthStart.getDay();
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
  const days: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (days.length % 7 !== 0) days.push(null);
  const monthLabel = `${monthNames[visibleMonth.getMonth()]} de ${visibleMonth.getFullYear()}`;
  const selectedDateLabel = selectedDate
    ? new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(selectedDate)
    : "Selecione uma data";
  const canConfirm = Boolean(selectedExam && selectedDate && selectedTime);
  const changeMonth = (amount: number) => setVisibleMonth(current => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  const selectExam = (exam: (typeof catalog)[number]) => {
    setSelectedExam(exam);
    setExamQuery(exam.name);
    setTypeFilter(exam.type);
    setUnitFilter(exam.unit);
    setExamMenuOpen(false);
  };

  return (
    <Layout title="Agendar exames">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-marinho">Agendar Exames</h2>
          <p className="mt-1 text-sm text-gray5">Selecione os exames e escolha data e local de coleta</p>
        </div>

        <div className="flex items-center rounded-xl border border-borda bg-white px-6 py-4 text-xs text-gray5">
          <div className="flex items-center gap-2 font-bold text-safira"><span className="flex size-5 items-center justify-center rounded-full bg-bic text-white">✓</span>Exame e unidade</div>
          <span className="mx-5 h-px w-10 bg-borda" />
          <div className="flex items-center gap-2 font-bold text-safira"><span className="flex size-5 items-center justify-center rounded-full bg-bic text-white">2</span>Data e horário</div>
          <span className="mx-5 h-px w-10 bg-borda" />
          <div className="flex items-center gap-2"><span className="flex size-5 items-center justify-center rounded-full bg-fundo text-gray5">3</span>Confirmação</div>
        </div>

        <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-borda bg-white p-6">
              <h3 className="mb-5 text-lg font-extrabold text-marinho">1. Qual exame você precisa realizar?</h3>
              <div className="relative mb-4">
                <label htmlFor="exam-search" className="mb-1 block text-[10px] font-semibold uppercase text-gray5">Pesquisar exame</label>
                <div className="relative">
                  <input id="exam-search" value={examQuery} onChange={event => { setExamQuery(event.target.value); setSelectedExam(null); setExamMenuOpen(true); }} onFocus={() => setExamMenuOpen(true)} onBlur={() => setTimeout(() => setExamMenuOpen(false), 150)} placeholder="Digite o nome do exame..." autoComplete="off" className="w-full rounded-lg border border-borda px-3 py-3 pr-10 text-sm font-semibold text-marinho outline-none placeholder:font-normal placeholder:text-gray5 focus:border-bic focus:ring-2 focus:ring-bic/10" />
                  <i className="bi bi-search absolute top-1/2 right-4 -translate-y-1/2 text-gray5" />
                </div>
                {examMenuOpen && examQuery.trim() && <div className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-borda bg-white p-1 shadow-lg">
                  {filteredExams.length ? filteredExams.map(exam => <button key={exam.name} type="button" onMouseDown={event => event.preventDefault()} onClick={() => selectExam(exam)} className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-marinho hover:bg-fundo"><span className="font-semibold">{exam.name}</span><span className="text-xs text-gray5">{exam.type}</span></button>) : <p className="px-3 py-3 text-sm text-gray5">Exame não encontrado</p>}
                </div>}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block rounded-lg border border-borda px-3 py-2"><span className="block text-[10px] font-semibold uppercase text-gray5">Unidade de coleta</span><select value={unitFilter} onChange={event => { setUnitFilter(event.target.value); setSelectedExam(null); }} className="mt-1 w-full bg-transparent text-sm font-bold text-marinho outline-none"><option>Todas as unidades</option><option>Laboratório Centro</option><option>Unidade Vila Nova</option></select></label>
                <label className="block rounded-lg border border-borda px-3 py-2"><span className="block text-[10px] font-semibold uppercase text-gray5">Tipo</span><select value={typeFilter} onChange={event => { setTypeFilter(event.target.value); setSelectedExam(null); }} className="mt-1 w-full bg-transparent text-sm font-bold text-marinho outline-none"><option>Todos</option><option>Imagem</option><option>Laboratorial</option></select></label>
              </div>
              {selectedExam && <p className="mt-3 text-xs text-gray5">Exame selecionado: <strong className="text-safira">{selectedExam.name}</strong></p>}
            </section>

            <section className="rounded-2xl border border-borda bg-white p-6">
              <h3 className="mb-5 text-lg font-extrabold text-marinho">2. Escolha a data e o horário de coleta</h3>
              <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="mb-3 flex items-center justify-between"><h4 className="text-sm font-bold capitalize text-marinho">{monthLabel}</h4><div className="flex gap-1"><button type="button" aria-label="Mês anterior" disabled={visibleMonth.getFullYear() === today.getFullYear() && visibleMonth.getMonth() <= today.getMonth()} onClick={() => changeMonth(-1)} className="rounded-md bg-fundo px-3 py-2 text-gray5 transition-colors hover:bg-borda disabled:cursor-not-allowed disabled:opacity-40"><i className="bi bi-chevron-left" /></button><button type="button" aria-label="Próximo mês" onClick={() => changeMonth(1)} className="rounded-md bg-ceu px-3 py-2 text-white transition-colors hover:bg-safira"><i className="bi bi-chevron-right" /></button></div></div>
                  <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-gray5">
                    {weekdays.map((day, i) => <span key={`${day}-${i}`} className="py-2">{day}</span>)}
                    {days.map((day, i) => {
                      const date = day ? new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day) : null;
                      const isPast = date ? date < today : false;
                      const isSelected = date && selectedDate && sameDay(date, selectedDate);
                      return date ? <button key={i} type="button" disabled={isPast} aria-pressed={Boolean(isSelected)} onClick={() => { setSelectedDate(date); setSelectedTime(null); }} className={`mx-auto flex size-9 items-center justify-center rounded-lg transition-colors ${isSelected ? "bg-ceu font-bold text-white" : isPast ? "cursor-not-allowed text-gray5/30 line-through" : "hover:bg-fundo hover:text-safira"}`}>{day}</button> : <span key={`blank-${i}`} />;
                    })}
                  </div>
                </div>
                <div>
                  <div className="mb-4 text-right"><p className="text-sm font-bold capitalize text-marinho">{selectedDateLabel}</p><p className="mt-1 text-sm text-gray5">Coleta · Horários de Brasília</p></div>
                  <div className="grid grid-cols-2 gap-3">{times.map(time => <button key={time} type="button" disabled={!selectedDate} aria-pressed={selectedTime === time} onClick={() => setSelectedTime(time)} className={`rounded-lg border px-4 py-3 text-sm font-extrabold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${selectedTime === time ? "border-ceu bg-ceu text-white" : "border-borda bg-iconesTopBar text-safira hover:border-ceu"}`}>{time}</button>)}</div>
                  <p className="mt-4 text-xs leading-relaxed text-gray5"><i className="bi bi-info-circle mr-1" />Leve o pedido e um documento com foto no dia da coleta.</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="rounded-2xl border border-borda bg-white p-6">
            <span className="rounded-full bg-iconesTopBar px-3 py-1 text-[10px] font-bold text-bic"><i className="bi bi-check-circle mr-1" />Confirmação</span>
            <h3 className="mt-4 text-xl font-extrabold text-marinho">Resumo do exame</h3>
            <p className="mt-2 text-xs leading-relaxed text-gray5">Confira os detalhes antes de reservar seu horário de coleta.</p>
            <div className="mt-4 divide-y divide-borda">
              <Summary label="Paciente" value="Milena Mattos" />
              <Summary label="Exame selecionado" value={selectedExam?.name ?? "Selecione um exame"} />
              <Summary label="Tipo" value={selectedExam?.type ?? "—"} />
              <Summary label="Data e horário" value={selectedDate && selectedTime ? `${new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric" }).format(selectedDate)}, às ${selectedTime}` : "Selecione data e horário"} />
              <Summary label="Local de coleta" value={selectedExam ? `${selectedExam.unit} · ${selectedExam.address}` : "Selecione um exame"} />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray5">O valor, o preparo e o prazo de resultado serão informados pela unidade. Confirme as condições com a recepção.</p>
            <button type="button" disabled={!canConfirm} className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-extrabold text-white transition-colors ${canConfirm ? "bg-ceu hover:bg-safira" : "cursor-not-allowed bg-ceu/50"}`}><i className="bi bi-check2 mr-1" />Confirmar exame</button>
            <p className="mt-3 text-center text-[10px] text-gray5">Após confirmar, acompanhe a reserva em Meus agendamentos.</p>
          </aside>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-borda bg-fundo px-4 py-3 text-xs text-safira"><span className="rounded-md bg-bic p-2 text-white"><i className="bi bi-file-earmark-medical" /></span><span>Seus documentos liberados ficam em<br /><strong>Resultados de exames.</strong></span></div>
        <footer className="pt-1 text-center text-[10px] text-gray5/60">Ambiente demonstrativo. Todos os dados são fictícios. | Privacidade · Acessibilidade · Ajuda</footer>
      </div>
    </Layout>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return <div className="py-3"><p className="text-[10px] font-semibold uppercase text-gray5">{label}</p><p className="mt-1 text-xs font-bold leading-snug text-marinho">{value}</p></div>;
}



