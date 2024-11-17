// components-pages/conteudoFooter.tsx
'use client'

import React from 'react';

export default function Footer() {
  return (
    <footer className="text-secondary py-6 mt-auto">
      <div className="container mx-auto px-6 sm:px-8">
               <div>
            <p className="text-sm text-text-center sm:text-right">
              © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
            </p>
          </div>
        </div>
      
    </footer>
  );
}
