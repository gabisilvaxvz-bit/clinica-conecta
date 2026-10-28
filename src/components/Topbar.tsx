export default function Topbar() {
  return (
    <header className="d-flex align-items-center justify-content-between bg-white px-4 py-3 border-bottom">
      
      {/* =========================================
          1. PARTE ESQUERDA: Textos 
      ========================================= */}
      <div className="d-flex flex-column" >
        <span className="text-secondary" style={{ fontSize: '14px' }}>Portal do paciente /</span>
        <h1 className="h5 mb-0 fw-bold" style={{ color: '#0f172a' }}>Agendar consulta</h1>
      </div>

      {/* =========================================
          2. PARTE CENTRAL: Barra de Pesquisa 
      ========================================= */}
      <div className="flex-grow-1 mx-5" style={{ maxWidth: '600px' }}>
        <div className="position-relative">
          
          <input 
            type="text" 
            placeholder="Buscar consultas, exames..." 
            className="form-control rounded-pill bg-light border-0 py-2 ps-5"
          />
        </div>
      </div>

      {/* =========================================
          3. PARTE DIREITA: Sino e Perfil 
      ========================================= */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Botão do Sino */}
        <button className="btn btn-light d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', borderRadius: '12px' }}>
         
        </button>

        {/* Botão do Perfil */}
        <button className="btn btn-light d-flex align-items-center gap-2 border-0 text-start px-3 py-2" style={{ borderRadius: '12px' }}>
          {/* Quadrado com iniciais */}
          <div className="bg-primary text-white fw-bold d-flex align-items-center justify-content-center rounded" style={{ width: '38px', height: '38px' }}>
            MM
          </div>
          
          <div className="d-flex flex-column">
            <span className="fw-bold" style={{ color: '#0f172a', fontSize: '14px' }}>Milena Mattos</span>
            <span className="text-secondary" style={{ fontSize: '12px' }}>Paciente</span>
          </div>
          
          
        </button>

      </div>
    </header>
  );
}