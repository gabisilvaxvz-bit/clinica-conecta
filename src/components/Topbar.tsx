type TopbarProps = {
  title?: string;
};

export default function Topbar({ title = "Início" }: TopbarProps) {
  return (
    <header className="flex items-center justify-between gap-6 bg-white px-8 py-3.5 border-b border-[#E8EEF5]">
      <div className="flex flex-col min-w-40">
        <span className="text-[13px] text-gray4">Portal do paciente /</span>
        <h1 className="text-lg font-bold text-marinho m-0 leading-tight">{title}</h1>
      </div>

      <div className="flex-1 max-w-xl">
        <label className="relative block">
          <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray4" />
          <input
            type="search"
            placeholder="Buscar consultas, exames..."
            className="w-full rounded-full bg-[#F4F7FB] border-0 py-2.5 pl-11 pr-4 text-sm text-marinho placeholder:text-gray4 outline-none"
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-11 h-11 rounded-xl bg-[#F4F7FB] text-marinho flex items-center justify-center border-0"
          aria-label="Notificações"
        >
          <i className="bi bi-bell text-lg" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-[#F4F7FB] border-0 text-start px-3 py-1.5"
        >
          <div className="w-9 h-9 rounded-lg bg-bic text-white font-bold flex items-center justify-center text-sm">
            MM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm text-marinho">Milena Mattos</span>
            <span className="text-xs text-gray4">Paciente</span>
          </div>
        </button>
      </div>
    </header>
  );
}
