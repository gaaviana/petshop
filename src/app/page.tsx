// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import { Post } from "@/types/Post";
import SemPosts from "@/components/SemPosts";

export default async function Home() {

  const res = await fetch(`http://localhost:2112/posts`, {
    // Revalidamos o cahe do next a cada requisição para garantir que os dados estejam sempre atualizados
    next: {revalidate: 0}
  });

  if(!res.ok){
    throw new Error('Erro ao buscar os posts: '+res.statusText)
  }

  const posts:Post[] = await res.json()


  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      {
        /* renderização condicional */
        posts.length === 0 ?  <SemPosts /> : <ListaPosts posts={posts} />
      }
    </section>
  );
}
