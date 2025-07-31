import { Metadata } from "next"
import estilos from './not-found.module.css'

export const metadata:Metadata = {
    title: 'pagina não encontrada | petshop',
    robots: 'noindex'
}

export default function Pagina404() {
  return (
    <>
        <section className={estilos.conteudo}>
            <h2>Ops! página não encontrada</h2>
        </section>      
    </>
  )
}
