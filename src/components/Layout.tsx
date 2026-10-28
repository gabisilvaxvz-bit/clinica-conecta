import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
  title: string;        // título exibido no Topbar (muda a cada página)
  children: ReactNode;  // conteúdo da página
}

/*
  Casca padrão de TODAS as páginas. Como o layout fica aqui, cada página só
  escreve o seu conteúdo: <Layout title="Início"> ...conteúdo... </Layout>

  Como funciona:
  - A Sidebar é `fixed` (fica fora do fluxo, colada na esquerda, 100% da altura).
  - Por isso a coluna da direita recebe `ml-sidebar`, uma margem exatamente
    igual à largura da Sidebar (variável --spacing-sidebar no index.css).
    Antes era `ml-[22%]`, que só batia com a Sidebar em uma largura de tela.
  - Essa coluna é um flex vertical: Topbar em cima e <main> com `flex-1`
    ocupando o resto da altura. `min-h-screen` garante o fundo até o fim.
  - Os espaçamentos (p-7 e space-y-6) ficam no <main>, então as páginas
    não precisam repetir margens.
*/
export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-fundo font-sans">
      <Sidebar />
      <div className="ml-sidebar flex min-h-screen flex-col">
        <Topbar title={title} />
        <main className="flex-1 space-y-6 p-7">{children}</main>
      </div>
    </div>
  );
}
