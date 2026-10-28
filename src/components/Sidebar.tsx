 ng";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-74 bg-marinho text-white text-sm p-5 flex flex-col justify-between">
      {/* 1. Parte Superior: Logo e Links */}
      <div>
        {/*Logo*/}
        <div className="mb-8">
          <img src={logo} alt="Clínica Conecta" className="h-10 w-auto object-contain" />
        </div>

        {/* Links de Navegação */}
        <nav className="flex flex-col space-y-2 ">

          <p className="text-sm font-medium text-bebe">MENU</p>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic hover:text-bebe transition whitespace-nowrap !no-underline">
            <i className="bi bi-house-door text-lg "></i> 
            Início
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-calendar-plus text-lg "></i>
            Agendar consultas
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-file-medical text-lg "></i>
            Agendar exames
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-arrow-right-circle text-lg "></i>
            Meus encaminhamentos
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-search text-lg "></i>
            Resultados de exames
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-calendar-check text-lg "></i>
            Meus agendamentos
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-people text-lg "></i>
            Fila online
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-person text-lg "></i>
            Meu perfil
          </a>
          <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-white hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
            <i className="bi bi-gear text-lg "></i>
            Configurações
          </a>
          
          <div className="mt-8 mb-16">
            <a href="#" className=" flex items-center gap-3 block w-full p-2 rounded-lg text-vermelho hover:bg-bic active:bg-bic transition whitespace-nowrap !no-underline">
              <i className="bi bi-box-arrow-right text-lg text-vermelho"></i>
              Sair
            </a>
          </div>
        </nav>
      </div>

      {/* 2. Parte Inferior: Perfil do Usuário / Botão de Sair */}
      <div className="border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400">Logado como:</p>
        <p className="text-sm font-medium text-white">seu@email.com</p>
      </div>
    </aside>
  );
}