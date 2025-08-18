'use client'
// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";
import FiltroCategorias from "./FiltroCategorias";
import { log } from "console";
import { useState } from "react";
import SemPosts from "./SemPosts";

/* Configurando um tipo para este componente e,
neste tipo, definimos a prop posts relacionando ela ao tipo
Post criado anteriormente. */
type ListaPostsProps = {
  posts: Post[];
};

export default function ListaPosts({ posts }: ListaPostsProps) {
  // gerando um novo array de categorias usadno map, garantindo qeu não há repetição de categorias usando spread e new set.
  const categorias = [...new Set(posts.map((post) => post.categoria))];

  // Definindo o state com tipos null (quando não há categoria selecionada) ou string (que é o tipo para nomes/textos referentes as categorias). Passamos null entre parenteses indicando que por padráo não há categoria selecionada.
  const [categoriaAtiva, setCategoriaAtiva] = useState<null | string>("a");

  const postsFiltrados = categoriaAtiva ? posts.filter((post) => post.categoria === categoriaAtiva) : posts
  console.log(postsFiltrados);
  

  

  return (
    <>
      <FiltroCategorias />

    {
      postsFiltrados.length === 0 ? <SemPosts/> :
         <div className={estilos.posts}>
        {postsFiltrados.map(({ id, titulo, subtitulo }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <h3>{titulo}</h3>
              <p>{subtitulo}</p>
            </Link>
          </article>
        ))}
      </div>
    }

   
    </>
  );
}
