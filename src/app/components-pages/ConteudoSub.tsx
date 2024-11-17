import Experiencias from "./Experiencias";

const education = [
    {
        title: "Curso Superior de Tecnologia Universidade Anhembi Morumbi",
        curso: "Análise e Desenvolvimento de Sistemas",
        date: "2023 - Cursando",
    },
    {
        title: "Aprendizagem Profissional Senac Brasil",
        curso: "Aprendizagem Profissional Comercial em Serviços Administrativos, Administração de Empresas",
        date: "2017 - 2018",
    },
];

export default function ConteudoAbout() {
    return (
        <div className="mt-10 px-4 sm:px-6 md:px-8">
            <h1 className="text-primary text-4xl font-bold mb-4 sm:text-3xl md:text-4xl">
                About me
            </h1>
            <span className="text-secondary-foreground text-base sm:text-lg md:text-xl leading-relaxed">
                Desenvolvedor em transição para fullstack, com sólida experiência em e-commerce e SAP Business One.
                <br />Atuação em integração de marketplaces, liderança de projetos e suporte técnico.
                <br />Conhecimento em linguagens como C#, JavaScript e Python, além de bancos de dados SQL e NoSQL,<br />e frameworks como front-end. Familiaridade com APIs RESTful.
            </span>
            <Experiencias />
            <h1 className="text-4xl font-bold mb-5 mt-8">Educação</h1>
            <div>
                {education.map((educationItem, index) => (
                    <div key={index} className="flex flex-col gap-4 mt-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold text-primary">{educationItem.title}</h2>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg">{educationItem.curso}</p>
                                <p className="text-lg">{educationItem.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

          
        </div>
    );
}
