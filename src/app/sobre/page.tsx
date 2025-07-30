import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Sobre | PetShop',
    description: 'Descubra mais sobre a gente'
}
export default function Sobre() {

  return (
    <>
      <section>
        <h2>Sobre</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ducimus suscipit recusandae, alias at pariatur fugiat praesentium tempora inventore ad eos repudiandae tempore repellat? Aperiam esse ex voluptatibus mollitia facilis.</p>
      </section>
    </>
  )
}
