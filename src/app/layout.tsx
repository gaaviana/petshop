import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal de Petshop com notícias, produtos e muito mais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <h1>PetShop</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
