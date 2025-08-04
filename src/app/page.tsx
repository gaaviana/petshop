// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import arrayPosts from "@/data/array-posts";
import { log } from "console";

export default async function Home() {

  const res = await fetch('http://localhost:2112/posts');

  if(!res.ok){
    throw new Error('Erro ao buscar os posts: '+res.statusText)
  }

  const posts = await res.json()
  log(posts)

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Aqui você encontra as últimas notícias sobre Pets.</p>
      <ListaPosts posts={arrayPosts} />
    </section>
  );
}
