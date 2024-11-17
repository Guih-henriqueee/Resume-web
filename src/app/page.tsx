'use client'
import { useState, useEffect } from 'react';
import { AppSidebar } from "../app/components-pages/side-menu";
import { ConteudoPrincipalHead } from "../app/components-pages/ConteudoPrincipal";
import ConteudoAbout from "./components-pages/ConteudoSub";
import { Separator } from "@/components/ui/separator";
import ConteudoSkills from "./components-pages/ConteudoSkill";
import Loading from './components-pages/loading'; // Importando o componente de Loading
import Footer from './components-pages/conteudoFooter'; // Importando o Footer

export default function Home() {
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Simula o carregamento da página
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Define o estado como 'false' após 2 segundos
    }, 2000); // Tempo de simulação do carregamento (2 segundos)

    return () => clearTimeout(timer); // Limpa o timeout quando o componente for desmontado
  }, []);

  if (loading) {
    // Exibe o efeito de loading enquanto a página está carregando
    return <Loading />;
  }

  return (
    <>
      <main className="flex flex-col min-h-screen"> {/* Usando flex-col para o layout de coluna */}
        <div className="flex flex-grow">
          {/* Sidebar */}
          <aside className="w-64 md:block hidden">
            <AppSidebar />
          </aside>

          {/* Conteúdo Principal */}
          <div className='m-5'> {/* Adiciona o ml-64 para garantir que o conteúdo não ultrapasse a sidebar */}
            <ConteudoPrincipalHead />
            <Separator className="mt-5" />
            <ConteudoAbout />
            <Separator className="mt-5" />
            <ConteudoSkills />
           
          </div>
        </div>
      </main>

      {/* Footer com padding adequado para não ultrapassar a sidebar */}
      <footer>
        <div className="m-20">
          {/* Conteúdo do footer */}
          <p className="text-center">&copy; 2024 - Todos os direitos reservados</p>
          <p className="text-center"> Guilherme Martins - FullStack Developer</p>
        </div>
      </footer>
    </>
  );
}
