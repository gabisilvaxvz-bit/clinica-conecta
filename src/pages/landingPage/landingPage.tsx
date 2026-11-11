import { 
  Heart, 
  ArrowUpRight, 
  Check, 
  Stethoscope, 
  FileText, 
  Activity 
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1933] text-white flex flex-col font-sans selection:bg-[#1042AE] selection:text-white">
      {/* 1. Header / Navbar */}
      <header className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center text-xs font-bold tracking-tighter">
            ( - )
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">Clínica</span>
            <span className="text-base font-bold tracking-wider text-white">CONECTA</span>
          </div>
        </div>

        /* Navegacao Links */
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-300">
          <a href="#clinica" className="hover:text-white transition-colors">A clínica</a>
          <a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a>
          <a href="#exames" className="hover:text-white transition-colors">Exames</a>
          <a href="#unidades" className="hover:text-white transition-colors">Unidades</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </nav>

        /* CTA Button Header */
        <button className="bg-[#1042AE] hover:bg-[#1042AE]/80 text-white text-xs font-medium px-4 py-2.5 rounded-md flex items-center gap-2 transition-all shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          Portal do paciente
        </button>
      </header>

      /* 2. Main Hero Section */
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 pb-12 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          /* Lado Esquerdo: Conteúdo Textual */
          <div className="lg:col-span-6 space-y-6 pr-0 lg:pr-6">
            /* Tag Superior */
            <div className="flex items-center gap-2 text-xs text-[#87CEEA] tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEA]"></span>
              MAIS PROXIMIDADE. MAIS CUIDADO.
            </div>

            /* Título Principal com destaque azul na frase "conectado à" */
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Seu cuidado,{' '}
              <span className="text-[#87CEEA]">conectado à</span>{' '}
              sua vida.
            </h1>

            /* Subtítulo */
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
              Da primeira consulta ao acompanhamento, um caminho mais simples para cuidar de você. Presencialmente e no seu tempo.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="bg-[#1042AE] hover:bg-[#1042AE]/90 text-white text-sm font-medium px-6 py-3.5 rounded-lg flex items-center gap-2 transition-all">
                <ArrowUpRight className="w-4 h-4" />
                Agendar uma consulta
              </button>

              <button className="bg-[#06276C] hover:bg-[#06276C]/80 text-white text-sm font-medium px-6 py-3.5 rounded-lg transition-all border border-white/5">
                Conheça a clínica
              </button>
            </div>

            {/* Bullets de Confirmação */}
            <div className="flex items-center gap-6 pt-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#87CEEA]" />
                <span>Escuta atenta</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#87CEEA]" />
                <span>Agendamento online</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem Hero + Card Flutuante */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-slate-800">
              <img
                src="SUA_URL_DA_IMAGEM_AQUI"
                alt="Consulta Médica"
                className="w-full h-[440px] md:h-[500px] object-cover object-center"
              />

              {/* Card Sobreposto na Imagem */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-[#1042AE]/90 backdrop-blur-md p-4 rounded-xl flex items-start gap-3 border border-white/10 shadow-lg">
                <div className="p-2 rounded-lg bg-white/10 text-white shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Conexão começa com escuta.</h4>
                  <p className="text-[11px] text-blue-100 mt-0.5 leading-tight">
                    Um cuidado feito de pessoa para pessoa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Cards Inferiores (Barra Flush Azul) */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#06276C]/60 rounded-2xl overflow-hidden border border-white/5">
          {/* Card 1: Consultas */}
          <div className="p-6 md:p-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#06276C] transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#1042AE] text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Consultas</h3>
                <p className="text-xs text-slate-300">Encontre sua especialidade</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          {/* Card 2: Exames */}
          <div className="p-6 md:p-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#06276C] transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#1042AE] text-white">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Exames</h3>
                <p className="text-xs text-slate-300">Veja exames e orientações</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

          {/* Card 3: Seus Resultados */}
          <div className="p-6 md:p-8 flex items-center justify-between hover:bg-[#06276C] transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#1042AE] text-white">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Seus resultados</h3>
                <p className="text-xs text-slate-300">Acesse pelo portal</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
        </div>
      </main>
    </div>
  );
}