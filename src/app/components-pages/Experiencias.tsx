'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Experiencias() {
    const experiencias = [
        {
            title: "Analista de Produtos Pleno",
            company: "Inpower",
            period: "Março 2024 - Atualmente",
            responsibilities: [
                "Liderança em projetos de desenvolvimento e integração de soluções tecnológicas, garantindo a entrega eficiente e dentro dos prazos estabelecidos.",
                "Atuação como KeyUser SAP Business One, otimizando processos internos e assegurando a integração eficiente com HUBs de marketplaces.",
                "Responsável pela análise, desenvolvimento e implantação de soluções de integração entre sistemas e plataformas externas.",
                "Monitoramento contínuo e auditoria das integrações no ERP, identificando e resolvendo problemas para garantir a integridade e eficiência do fluxo de dados.",
                "Desenvolvimento de relatórios e consultas avançadas utilizando HANA DB, proporcionando insights valiosos para a tomada de decisões estratégicas."
            ]
        },
        {
            title: "Analista de Cadastro de Produtos",
            company: "Inpower",
            period: "Agosto 2023 - Abril 2024",
            responsibilities: [
                "Acompanhamento de anúncios em marketplaces (Amazon, Mercado Livre, Magazine Luiza, Shopee, Kabum entre outros canais de e-commerce).",
                "Monitoramento e resolução de problemas relacionados à integração ERP com HUBs como Precode, Antmarket e Linx Ecommerce.",
                "Otimização das páginas de detalhes do produto (PDP), com foco em conteúdos enriquecidos e tratamento visual de imagens.",
                "Atuação como KeyUser e Tester em projetos de integração e otimização de processos.",
                "Gestão estratégica do cadastro e planejamento de anúncios para diversos marketplaces.",
                "Planejamento e implementação de melhorias contínuas para a performance de anúncios online.",
                "Controle e monitoramento da produtividade das equipes de cadastro de produtos.",
                "Treinamento e suporte contínuo às equipes sobre o processo de cadastro e manutenção de produtos.",
                "Análise e suporte na integração entre sistemas, garantindo o fluxo eficiente de dados entre ERP e HUBs.",
           
                "Criação de textos persuasivos (copywriting) para descrições de produtos, visando maximizar conversões.",
                "Cadastro e atualização de produtos no ERP SAP Business One, garantindo a consistência e precisão das informações."
            ]
        },
        
        // Adicione mais objetos de experiências conforme necessário
    ];


    return (
        <div className="mt-20 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8">Experiências</h1>
        <div>
            {experiencias.map((experiencia, index) => (
                <Card key={index} className="mb-6">
                    <CardContent>
                        <CardHeader>
                            <CardTitle className="text-3xl">{experiencia.title}</CardTitle>
                            <div className="flex gap-5 text-end justify-end">
                                <p className="text-primary">Empresa: {experiencia.company}</p>
                                <p className="text-primary">Período: {experiencia.period}</p>
                            </div>
                            <Separator />
                        </CardHeader>
                        <CardDescription>
                            <ul className="list-disc pl-5 space-y-2">
                                {experiencia.responsibilities.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
)
    
}
