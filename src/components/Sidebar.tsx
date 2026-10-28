import logo from "../assets/logo.svg";

/*
  Itens do menu em uma lista: para adicionar/remover/reordenar uma opção
  basta mexer aqui, em vez de copiar o <a> inteiro 9 vezes.
  `to` ainda é "#" nas páginas que não têm rota; troque quando criar a rota.
*/
const menu = [
  { label: "Início", icon: "bi-house-door", to: "/" },
  { label: "Agendar consultas", icon: "bi-calendar-plus", to: "#" },
  { label: "Agendar exames", icon: "bi-file-medical", to: "#" },
  { label: "Meus encaminhamentos", icon: "bi-arrow-right-circle", to: "#" },
  { label: "Resultados de exames", icon: "bi-search", to: "#" },
  { label: "Meus agendamentos", icon: "bi-calendar-check", to: "#" },
  { label: "Fila online", icon: "bi-people", to: "#" },
  { label: "Meu perfil", icon: "bi-person", to: "#" },
  { label: "Configurações", icon: "bi-gear", to: "#" },
];

// Classes comuns a todos os links (o "Sair" reaproveita e só troca a cor)
const linkBase =
  "flex w-full items-center gap-3 whitespace-nowrap rounded-lg p-2 transition hover:bg-bic";

export default function Sidebar() {
  // Pega o caminho atual para destacar o item ativo do menu
  const ativo = window.location.pathname;

  return (
    // `fixed` + `w-sidebar`: largura vem do index.css e é a mesma usada pelo Layout.
    // `justify-between` empurra o bloco do menu para cima e o "Sair" para o rodapé.
    // O overflow só age em telas muito baixas, e a barra de rolagem fica oculta
    // (antes ela aparecia por causa do `mb-16` no "Sair" + margens grandes).
    <aside className="fixed top-0 left-0 flex h-screen w-sidebar flex-col justify-between overflow-y-auto bg-marinho p-5 text-sm text-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div>
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Clínica Conecta" className="h-10 w-auto object-contain" />
        </div>

        <nav className="flex flex-col space-y-1">
          <p className="text-sm font-medium text-baby">MENU</p>

          {menu.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className={`${linkBase} text-white ${item.to === ativo ? "bg-bic" : ""}`}
            >
              <i className={`bi ${item.icon} text-lg`}></i>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Rodapé: "Sair" fixo embaixo, sem margens extras */}
      <a href="#" className={`${linkBase} text-red`}>
        <i className="bi bi-box-arrow-right text-lg"></i>
        Sair
      </a>
    </aside>
  );
}
