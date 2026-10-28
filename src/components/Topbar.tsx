interface TopbarProps {
  title: string; // título da página atual (vem do Layout)
}

/*
  Barra superior. Reescrita em Tailwind (antes usava classes do Bootstrap
  misturadas com style inline). Três blocos lado a lado com `justify-between`:
  títulos | busca (cresce com flex-1) | sino + perfil.
*/
export default function Topbar({ title }: TopbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-borda bg-white px-6 py-3">
      {/* 1. Esquerda: caminho + título da página */}
      <div className="flex flex-col">
        <span className="text-sm text-gray5">Portal do paciente /</span>
        <h1 className="text-xl font-bold text-safira">{title}</h1>
      </div>

      {/* 2. Centro: busca. `flex-1` ocupa o espaço livre, `max-w-xl` limita */}
      <div className="mx-8 max-w-xl flex-1">
        <div className="relative">
          <i className="bi bi-search absolute top-1/2 left-4 -translate-y-1/2 text-gray5"></i>
          <input
            type="text"
            placeholder="Buscar consultas, exames..."
            className="w-full rounded-xl bg-iconesTopBar py-2 pr-4 pl-11 text-sm outline-none focus:ring-2 focus:ring-bic text-gray5 placeholder:text-gray5"
          />
        </div>
      </div>

      {/* 3. Direita: sino e perfil */}
      <div className="flex items-center gap-3">
        <button className="flex size-11 items-center justify-center rounded-xl bg-iconesTopBar text-marinho">
          <i className="bi bi-bell text-safira" style={{ strokeWidth: '2px', WebkitTextStroke: '1px' }}></i>
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-iconesTopBar px-3 py-2 text-left">
          {/* Quadrado com as iniciais */}
          <div className="flex size-9 items-center justify-center rounded-lg bg-bic font-bold text-baby">
            MM
          </div>
          <div className="flex flex-col bg-iconesTopBar">
            <span className="text-sm font-bold text-marinho">Milena Mattos</span>
            <span className="text-xs text-gray5">Paciente</span>
          </div>
          <i className="bi bi-chevron-down text-gray5 ms-auto text-xs" style={{ WebkitTextStroke: '1px' }}></i>
        </button>
      </div>
    </header>
  );
}
