import Container from "@/components/Container";
import estilos from './detalhe-post.module.css'

type DetalhePostProps = {
    params: Promise<{id: string}>
}

export default function DetalhePost({params}:DetalhePostProps) {
  return (
   <article className={estilos.conteudo}>
    <h2></h2>
    <Container>
        <h3></h3>
        <p></p>
    </Container>
   </article>
  )
}
