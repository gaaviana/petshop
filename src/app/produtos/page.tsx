import { Metadata } from "next"

export default function Produtos() {
    const metadata:Metadata = {
        title: 'Produtos | PetShop',
        description: 'Hora da compra para o seu Pet'
    }

  return (
    <>
      <section>
        <h2>Produtos</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus suscipit recusandae, alias at pariatur fugiat praesentium tempora inventore ad eos repudiandae tempore repellat? Aperiam esse ex voluptatibus mollitia facilis.</p>
      </section>
    </>
  )
}
