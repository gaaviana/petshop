import Container from "./Container";
import estilos from "./SemPosts.module.css";

export default function SemPosts() {
  return (
   <Container>
    <p className={estilos.SemPosts}>Nenhum post encontrado! Tente novamente mais tarde.</p>
   </Container>
  )
}
