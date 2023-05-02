import Image from 'next/image'
import { Container } from '@/components/Container'
import target from '@/images/targt.png'
import body from '@/images/bod.png'
import apple from '@/images/appl.png'


const people = [
  {
    name: "Crie Objetivos",
    role: "O primeiro passo é estabelecer objetivos e definir prioridades.",
    imageUrl: target,
  },
  {
    name: "Procure Ajuda",
    role: "Passe à ação com a ajuda de um nutricionista.",
    imageUrl: apple,
  },
  {
    name: "Conquiste o seu bem-estar",
    role: "Mantenha o foco e celebre todas as conquistas!",
    imageUrl: body,
  },
];


export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className=""
    >
    <Container>
      <div className="mx-auto max-w-2xl md:text-center margin">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
          Como funciona?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 ">
          A alimentação saudável é a base da saúde. Preconizo tanto nas consultas de nutrição, como no acompanhamento nutricional, uma alimentação saudável e variada.
        </p>
      </div>
      <div className="mx-auto max-w-7xl py-12 px-3 sm:px-6 lg:px-8 lg:py-24 ">
        <div className="space-y-10">
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {people.map(person => (                           
              <li
                key={person.name}
                className={`rounded-lg background pt-10  text-center xl:text-left bg-cover`}
              >
              <div className="flex-shrink-0">
                <Image
                  className="h-20 w-full object-contain imageZoom"
                  src={person.imageUrl}
                  alt=""
                  priority
                />
              </div>
                <div className="space-y-2 xl:space-y-3">
                  <div className="h-4 w-6"></div>
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between secondary] p-2">
                    <div className="space-y-1 text-lg font-medium leading-6 ">
                      <h3 className="title">{person.name}</h3>
                      <p className="summmaryText">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
    </section>
  )
}
