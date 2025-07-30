import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'pagina não encontrada | petshop',
    robots: 'noindex'
}

export default function Pagina404() {
  return (
    <>
        <section>
            <h2>Ops! página não encontrada</h2>
        </section>      
    </>
  )
}
