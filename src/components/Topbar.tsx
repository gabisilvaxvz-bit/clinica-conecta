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
<<<<<<< HEAD
    <header className="d-flex align-items-center justify-content-between bg-white px-4 py-3 border-bottom">
      
      {/* =========================================
          1. PARTE ESQUERDA: Textos 
      ========================================= */}
      <div className="d-flex flex-column" >
        <span className="text-secondary" style={{ fontSize: '14px' }}>Portal do paciente /</span>
        <h1 className="h5 mb-0 fw-bold" style={{ color: '#0f172a' }}>Agendar consulta</h1>
=======
    <header className="flex items-center justify-between border-b border-borda bg-white px-6 py-3">
      {/* 1. Esquerda: caminho + título da página */}
      <div className="flex flex-col">
        <span className="text-sm text-gray4">Portal do paciente /</span>
        <h1 className="text-xl font-bold text-marinho">{title}</h1>
>>>>>>> d8cc193e0f39ec6c7d04f5c2c4a2b3b2c9b2d1fa
      </div>

      {/* 2. Centro: busca. `flex-1` ocupa o espaço livre, `max-w-xl` limita */}
      <div className="mx-8 max-w-xl flex-1">
        <div className="relative">
          <i className="bi bi-search absolute top-1/2 left-4 -translate-y-1/2 text-gray4"></i>
          <input
            type="text"
            placeholder="Buscar consultas, exames..."
            className="w-full rounded-full bg-fundo py-2 pr-4 pl-11 text-sm outline-none focus:ring-2 focus:ring-bic"
          />
        </div>
      </div>

      {/* 3. Direita: sino e perfil */}
      <div className="flex items-center gap-3">
        <button className="flex size-11 items-center justify-center rounded-xl bg-fundo text-marinho">
          <i className="bi bi-bell"></i>
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-fundo px-3 py-2 text-left">
          {/* Quadrado com as iniciais */}
          <div className="flex size-9 items-center justify-center rounded-lg bg-bic font-bold text-white">
            MM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-marinho">Milena Mattos</span>
            <span className="text-xs text-gray4">Paciente</span>
          </div>
        </button>
      </div>
    </header>
  );
}
