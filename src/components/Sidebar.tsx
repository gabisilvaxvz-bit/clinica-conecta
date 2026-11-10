import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const itemClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-3 w-full p-2 rounded-lg text-white transition whitespace-nowrap !no-underline",
    isActive ? "bg-bic" : "hover:bg-bic",
  ].join(" ");

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-74 bg-marinho text-white text-sm p-5 flex flex-col">
      <div>
        <div className="mb-8">
          <img src={logo} alt="Clínica Conecta" className="h-10 w-auto object-contain" />
        </div>

        <nav className="flex flex-col space-y-1">
          <p className="text-sm font-medium text-baby mb-2">MENU</p>

          <NavLink to="/" end className={itemClass}>
            <i className="bi bi-house-door text-lg" />
            Início
          </NavLink>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-calendar-plus text-lg" />
            Agendar consultas
          </a>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-file-medical text-lg" />
            Agendar exames
          </a>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-arrow-right-circle text-lg" />
            Meus encaminhamentos
          </a>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-search text-lg" />
            Resultados de exames
          </a>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-calendar-check text-lg" />
            Meus agendamentos
          </a>
          <NavLink to="/fila-online" className={itemClass}>
            <i className="bi bi-people text-lg" />
            Fila online
          </NavLink>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-person text-lg" />
            Meu perfil
          </a>
          <a href="#" className={itemClass({ isActive: false })}>
            <i className="bi bi-gear text-lg" />
            Configurações
          </a>

          <div className="mt-8">
            <a
              href="#"
              className="flex items-center gap-3 w-full p-2 rounded-lg !text-red hover:bg-bic transition whitespace-nowrap !no-underline"
            >
              <i className="bi bi-box-arrow-right text-lg text-red" />
              Sair
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
