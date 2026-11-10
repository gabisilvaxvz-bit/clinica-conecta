interface TopbarProps {
  title: string;
}

export default function Topbar({ title }: TopbarProps) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 border-b border-borda bg-white px-4 py-3 md:flex md:justify-between md:px-6">
      <div className="min-w-0">
        <span className="text-xs text-gray5 sm:text-sm">Portal do paciente /</span>
        <h1 className="truncate text-lg font-bold text-safira sm:text-sm">{title}</h1>
      </div>

      <div className="col-span-2 row-start-2 w-full md:mx-4 md:w-auto md:max-w-xl md:flex-1 lg:mx-8">
        <div className="relative">
          <i className="bi bi-search absolute top-1/2 left-4 -translate-y-1/2 text-gray5"></i>
          <input
            type="text"
            placeholder="Buscar consultas, exames..."
            className="w-full rounded-xl bg-iconesTopBar py-2 pr-4 pl-11 text-sm outline-none focus:ring-2 focus:ring-bic text-gray5 placeholder:text-gray5"
          />
        </label>
      </div>

      <div className="col-start-2 row-start-1 flex items-center gap-2 sm:gap-3">
        <button aria-label="Notificações" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-iconesTopBar text-marinho sm:size-11">
          <i className="bi bi-bell text-safira" style={{ strokeWidth: '2px', WebkitTextStroke: '1px' }}></i>
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-iconesTopBar p-1.5 text-left sm:px-3 sm:py-2">
          {/* Quadrado com as iniciais */}
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-bic font-bold text-baby sm:size-9">
            MM
          </div>
          <div className="hidden flex-col bg-iconesTopBar sm:flex">
            <span className="text-sm font-bold text-marinho">Milena Mattos</span>
            <span className="text-xs text-gray5">Paciente</span>
          </div>
          <i className="bi bi-chevron-down hidden text-xs text-gray5 sm:inline" style={{ WebkitTextStroke: '1px' }}></i>
        </button>
      </div>
    </header>
  );
}
