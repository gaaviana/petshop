import type { Metadata } from "next";
import {Roboto, Fjalla_One} from "next/font/google"
import "./globals.css";
import Link from "next/link";
import Cabecalho from "@/components/Cabecalho";

/* Configuea variáveis de fontes */

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap'
})

const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fjalla',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal de Petshop com notícias, produtos e muito mais",
  keywords: [
    'petshop','banho e tosa','ração para cães','ração para gatos','produtos pet','vacinação pet','veterinário','brinquedos para pets','caminha para cachorro','coleiras e guias','petshop online','hotel para cães','acessórios para pets','antipulgas','comida natural para pets','petiscos saudáveis','creche para pets','petshop perto de mim','consulta veterinária','loja de animais','cuidados com filhotes','produtos para gatos','atendimento pet domiciliar'
  ],
  authors: [
    {
      name: 'Gabriel Viana Paulino',
      url: 'https://github.com/gaaviana'
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
       <Cabecalho />
        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
