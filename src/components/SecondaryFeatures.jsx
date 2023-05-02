import Image from 'next/image'
import { Container } from '@/components/Container'
import mari2 from '@/images/mari2.jpg'
import marionline from '@/images/marionline.jpg'


const posts = [
  {
    title: "Consulta presencial",
    description:
      "Realizo consultas em diversos locais do norte do país, nomeadamente no Porto, São Mamede Infesta, Maia, Valongo, Gondomar e Paredes.",
    imageUrl: mari2,
  },
  {
    title: "Consulta online",
    description:
      "A distância não pode ser um obstáculo para alcançar o sucesso! Marque a sua consulta online, só irá precisar de: Telémovel ou computador com acesso à internet e com câmara, balança e fita métrica.",
    imageUrl: marionline,
  },
];


export function SecondaryFeatures() {
  return (
    <section
      id="agendamentos"
      aria-label=""
      className="lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Emagreça com prazer e simplicidade
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Quer emagrecer sem dietas desiquilibradas e sem passar fome? Conheça os meus diferentes serviços e programas que podem ajudar a mudar a sua alimentação e a transformar a sua vida!
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2 marginAdjust">
          {posts.map(post => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-41 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                  priority
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold title">{post.title}</p>
                    <p className="mt-3 summmaryText text-gray-500">
                      {post.description}
                    </p>
                  </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
