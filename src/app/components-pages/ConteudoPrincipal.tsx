'use client'

import { Card, CardContent } from "@/components/ui/card"

export function ConteudoPrincipalHead() {
    return (
        <div className="flex flex-col2 items-center justify-center gap-2">
            <div>
                <Card className="mr-5">
                    <CardContent className="mt-5">
                        <p>Olá, eu sou o <strong className="text-lg">Guilherme</strong>, Desenvolvedor FullStack.</p>
                        <p>Sou um desenvolvedor com experiência em React, Next.js, Node.js, TypeScript, JavaScript, HTML e CSS.</p>
                        <p>Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="w-[1/3]">
                <img src="https://github.com/guih-henriqueee.png" alt="Foto de perfil" className="rounded-full w-40 h-40 object-cover" />
            </div>

        </div>

    )
}
