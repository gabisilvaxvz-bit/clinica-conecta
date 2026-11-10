import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

const menu = [
  { label: "Inicio", icon: "bi-house-door", to: "/" },
  { label: "Agendar consultas", icon: "bi-calendar-plus", to: "/agendar-consulta1" },
  { label: "Agendar exames", icon: "bi-file-medical", to: "/agendar-exames1" },
  { label: "Meus encaminhamentos", icon: "bi-arrow-right-circle", to: "#" },
  { label: "Resultados de exames", icon: "bi-search", to: "#" },
  { label: "Meus agendamentos", icon: "bi-calendar-check", to: "#" },
  { label: "Fila online", icon: "bi-people", to: "#" },
  { label: "Meu perfil", icon: "bi-person", to: "#" },
  { label: "Configurações", icon: "bi-gear", to: "#" },
];

const linkBase = "flex w-full items-center gap-2 whitespace-nowrap rounded-md px-2 py-2 text-xs transition hover:bg-bic hover:text-white";

const itemClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-3 w-full p-2 rounded-lg text-white transition whitespace-nowrap !no-underline",
    isActive ? "bg-bic" : "hover:bg-bic",
  ].join(" ");

export default function Sidebar() {
  const ativo = window.location.pathname;

  return (
    <>
      <aside className="fixed top-0 left-0 hidden h-screen w-sidebar flex-col overflow-y-auto bg-marinho p-4 text-gray5 lg:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div>
          <div className="mb-5">
            <img src={logo} alt="Clínica Conecta" className="h-8 w-auto object-contain" />
          </div>

          <nav className="flex flex-col gap-1">
            <p className="mb-3 text-[11px] font-semibold tracking-wide text-baby">MENU</p>
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                aria-current={item.to === ativo ? "page" : undefined}
                className={`${linkBase} ${item.to === ativo ? "bg-bic text-white" : "text-gray5"}`}
              >
                <i className={`bi ${item.icon} text-sm`} aria-hidden="true"></i>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <a href="#" className={`${linkBase} mt-6 text-red hover:bg-red/10 hover:text-red`}>
          <i className="bi bi-box-arrow-right text-sm" aria-hidden="true"></i>
          Sair
        </a>
      </aside>

      <div className="flex flex-col bg-marinho text-white lg:hidden">
        <div className="flex h-14 items-center px-4">
          <img src={logo} alt="Clínica Conecta" className="h-8 w-auto object-contain" />
        </div>
        <nav aria-label="Navegação principal" className="flex gap-1 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.to}
              aria-current={item.to === ativo ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs transition hover:bg-bic ${item.to === ativo ? "bg-bic" : ""}`}
            >
              <i className={`bi ${item.icon}`} aria-hidden="true"></i>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
