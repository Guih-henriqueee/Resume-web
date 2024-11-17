'use client';
import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importando os ícones do FontAwesome de react-icons
import { FaJsSquare, FaPython, FaJava, FaCss3Alt, FaNodeJs, FaReact, FaDatabase, FaHtml5 } from 'react-icons/fa';

export function CarouselSpacing() {
  // Lista de linguagens de programação com ícones FontAwesome
  const logos = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-primary text-6xl" />, // Ícone JavaScript
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-primary text-6xl" />, // Ícone CSS
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-primary text-6xl" />, // Ícone CSS
    },
    {
        name: "React",
        icon: <FaReact className="text-primary text-6xl" />, // Ícone React
      },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-primary text-6xl" />, // Ícone Node.js
    },
    
    {
        name: "Python",
        icon: <FaPython className="text-primary text-6xl" />, // Ícone Python
      },
    {
      name: "SQL",
      icon: <FaDatabase className="text-primary text-6xl" />, // Ícone SQL
    },
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {logos.slice(0, logos.length - 1).map((logo, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/5 lg:basis-1/5 sm:basis-1/3">
            <div className="p-2">
              <Card className="text-center">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {logo.icon}
                </CardContent>
                <CardFooter className="text-lg font-semibold text-secondary-foreground">{logo.name}</CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navegação do carrossel (opcional) */}
      <CarouselPrevious className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full">
        &lt;
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full">
        &gt;
      </CarouselNext>
    </Carousel>
  );
}
