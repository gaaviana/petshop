import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";
import { title } from "process";
import { notFound } from "next/navigation";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

async function buscarPostPorId({ params }: DetalhePostProps): Promise<Post> {
  const { id } = await params;

  const res = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Erro ao buscar os posts: " + res.statusText);
  }

  const post: Post = await res.json();

  return post;
}

export async function generateMetadata({ params }: DetalhePostProps) {
  const post = await buscarPostPorId({ params });

  return {
    title: post.titulo + " | Petshop",
    description: post.descricao,
  };
}

export default async function DetalhePost({ params }: DetalhePostProps) {
  const post = await buscarPostPorId({ params });

  return (
    <article className={estilos.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
