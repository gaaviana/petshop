import Container from "@/components/Container";
import estilos from "./not-found.module.css";

export default function PostNaoEncontrado() {
  return (
    <section className={estilos.conteudo}>
        <h2>Ops! Post não encontrado</h2>
        <Container>
            <p>O post que você esta tentando acessar não existe</p>
            <p><a href="/">Voltar para a pagina principal</a></p>
        </Container>
    </section>
  )
}
