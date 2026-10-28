import Layout from "../../components/Layout";
import { CardHome } from "../../components/CardHome";

/*
  Dados dos 4 KPIs. A tela é gerada a partir desta lista com .map(), então
  adicionar um quinto KPI é só incluir mais um objeto aqui.
  (Quando existir API, esta lista passa a vir dela.)
*/
const kpis = [
  { valor: "15 Out", titulo: "Próxima Consulta", descricao: "Dr. Carlos Mendes - Cardio", icone: "bi-calendar" },
  { valor: "3", titulo: "Exames Pendentes", descricao: "Aguardando resultado", icone: "bi-droplet" },
  { valor: "02", titulo: "Encaminhamentos", descricao: "Ativos este mês", icone: "bi-send" },
  { valor: "#5", titulo: "Posição na Fila", descricao: "Veja as orientações do profissional", icone: "bi-people" },
];

export default function Home() {
  return (
    <Layout title="Início">
      {/* Banner de boas-vindas (antes era o <main>; agora o <main> é do Layout) */}
      <section className="rounded-2xl bg-ceu p-7">
        <p className="text-lg font-semibold text-marinho">Bom dia, Milena Mattos!</p>
        <h2 className="text-2xl font-bold text-white">Tudo Conectado, do seu jeito.</h2>
        <p className="text-white">
          Você tem <span className="font-semibold">1 consulta esta semana e 3 resultados</span> de
          exames disponíveis.
        </p>

        <div className="mt-2 flex gap-4">
          {/* Botão arredondado: era o problema do "!rounded-lg". Ele existia porque o CSS
              do Bootstrap (fora das camadas do Tailwind) vencia as utilities. Sem o Bootstrap
              CSS, `rounded-lg` funciona normal. */}
          <button className="mt-2 flex items-center gap-3 rounded-lg bg-white px-4 py-2 font-semibold text-bic">
            <i className="bi bi-calendar-plus"></i>
            Agendar Consulta
          </button>
          {/* Ícone "gordinho": o Bootstrap Icons é uma fonte, então um contorno de texto
              (-webkit-text-stroke) engrossa o traço sem trocar de ícone. */}
          <button className="mt-2 flex items-center gap-3 rounded-lg border border-dashed border-gray4 bg-baby px-4 py-2 font-semibold text-white">
            <i className="bi bi-people [-webkit-text-stroke:0.6px]"></i>
            Fila Online
          </button>
        </div>
      </section>

      {/* KPIs: grid responsivo. 1 coluna no celular, 2 em telas médias, 4 em telas largas.
          `gap-4` dá o espaço entre os cards; o grid divide a largura igualmente. */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <CardHome key={kpi.titulo} {...kpi} />
        ))}
      </section>
    </Layout>
  );
}
