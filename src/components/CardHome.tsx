interface CardHomeProps {
  valor: string;      // número grande do KPI (ex.: "15 Out", "3", "#5")
  titulo: string;     // rótulo em negrito (ex.: "Exames Pendentes")
  descricao: string;  // linha cinza de apoio
  icone: string;      // classe do Bootstrap Icons (ex.: "bi-calendar")
}

/*
  Card de KPI da Home. Estrutura (igual ao design):

  ┌──────────────────────────┐
  │ VALOR              [ícone]│   <- linha 1: justify-between separa número e ícone
  │ Título                    │
  │ descrição                 │
  └──────────────────────────┘

  É só apresentação: recebe tudo por props, então para mudar os dados
  basta editar a lista `kpis` na Home (ou trocar por dados de uma API).
*/
export function CardHome({ valor, titulo, descricao, icone }: CardHomeProps) {
  return (
    <div className="rounded-2xl border border-borda bg-white p-6">
      {/* Linha 1: valor à esquerda, ícone à direita */}
      <div className="flex items-start justify-between">
        <span className="text-3xl font-extrabold text-safira">{valor}</span>
        <span className="flex size-10 items-center justify-center rounded-lg bg-icone text-bic">
          <i className={`bi ${icone}`}></i>
        </span>
      </div>

      {/* Linhas 2 e 3: título e descrição */}
      <p className="mt-4 mb-1 text-sm font-bold text-marinho">{titulo}</p>
      <p className="text-xs text-gray4">{descricao}</p>
    </div>
  );
}
