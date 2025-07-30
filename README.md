# PetShop

Projeto de uma aplicação web SPA usando Next.js, Typerscript e supabase (Bass - Back-End as a Service).

## 00_projeto-zerado

Ajustese e exclusões de elementos da instalação padrão do Next.js

### Revisando tópicos importantes

- `src/app/page.tsx`: Página principal (index, home). Obs.: o nome do arquivo **precisa ser** `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`: componente/arquivo especial que define a estrutura padrão (layout) para todas as páginas.

## 01_css-global-fonts-favicon-metadados

- Adição de estilos globais
- Importação, configuração e aplicação de fonts da web usando `next/fonts`
- Adição de mais metadados
- Aplicação automática de favicon adicionando arquivo `icon.png` direto na pasta `app`

## 02_paginas-basicas-links-ajustes-de-layout-metadados

- Criação das paginas/rotas (usando pastas e arquivo page)
- Definição de metadados específicos para cada pagina
- Adição do componente `<Link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML