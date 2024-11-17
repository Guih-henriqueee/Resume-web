import { CarouselSpacing } from "./Skills";

export default function ConteudoSkills() {
    return (
        <div className="mt-10 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl font-bold mb-5 mt-8">Skills</h1>
            
            <div className="skills">
                <CarouselSpacing />

               
                <h2 className="text-2xl font-bold mb-5 mt-8" >Principais Habilidades e Expertise:</h2>
                
                {/* Lista de habilidades */}
                <ul >
                    <li><strong className="text-primary">SAP Business One:</strong> Expertise em integração de sistemas e suporte a operações SAP, com amplo conhecimento em mapeamento de falhas e implementação de melhorias.</li>
                    <li><strong className="text-primary">Desenvolvimento de Software:</strong> Proficiência em Python, JavaScript, HTML e CSS para desenvolvimento web e automação.</li>
                    <li><strong className="text-primary">Banco de Dados:</strong> Experiência em MySQL, HANA DB, PostgreSQL, MariaDB e MongoDB, com capacidade de manipulação de dados e integração com aplicações.</li>
                    <li><strong className="text-primary">Automação e Ferramentas:</strong> Conhecimento em Docker para contêineres, Power BI para visualização de dados e APIs REST para comunicação eficiente entre sistemas.</li>
                    <li><strong className="text-primary">Integração de Sistemas:</strong> Vivência em conectar tecnologias às estratégias de negócio, focando em soluções escaláveis e de alto impacto.</li>
                    <li><strong className="text-primary">Gestão de Projetos:</strong> Experiência em gerenciar projetos de desenvolvimento de software, com foco em metodologias ágeis e entrega de resultados.</li>
                </ul>
            </div>
        </div>
    );
}
