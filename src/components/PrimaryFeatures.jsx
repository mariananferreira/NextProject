import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import mari from '@/images/mari1.jpg'


export function PrimaryFeatures() {
  const [hideText, setHideText] = useState(false);
  const toggleButton  = () => setHideText(true);
  
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="bg-slate-200 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative py-16">
        <div
          className="absolute inset-x-0 top-0 hidden h-1/2  lg:block"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
               aria-hidden="true"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <Image
                   className="rounded-3xl object-cover object-center shadow-2xl"
                   src={mari}
                    alt=""
                    priority
                    />
                </div>
              </div>
            </div>
            <div className="secondary relative lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
               className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
               aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                 height={384}
                 fill="none"
                 viewBox="0 0 404 384"
                 aria-hidden="true"
                >
                 <defs>
                    <pattern
                     id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                     x={0}
                      y={0}
                      width={20}
                      height={20}
                     patternUnits="userSpaceOnUse"
                    >
                      <rect
                         x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-indigo-500"
                         fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                     id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                     x={0}
                     y={0}
                     width={20}
                     height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                          className=""
                      fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                   fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="name">Mariana Guerreiro,</h2>
                <h2
                  className="text-2xl tracking-tight test"
                  id="join-heading"
                >
                  NUTRICIONISTA <br/>
                  NUTRICOACH                
                </h2>
                <p className="textAboutMe">
                  Olá!<br/>
                  Sou a Mariana Guerreiro, Nutricionista apaixonada pela área da alimentação e pela implementação de hábitos alimentares saudáveis.<br/>
                  Pretendo ajudá-lo/a a concretizar os seus objetivos de forma eficaz.<br/>
                  Consistência e dedicação são as chaves do sucesso!<br/>Bem-vindo/a ao meu website!</p>
                <button 
                  className="mt-2 inline-flex w-full items-center buttonStyle justify-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 sm:w-auto"
                  >
                    Saiba mais
                </button>
                <p className="textAboutMe">Segui por esta maravilhosa área porque adoro o ramo da saúde, onde posso ter impacto direto na vida das pessoas. A gratificação que se tem ao mudar a vida de alguém para melhor, não tem palavras.<br/>Licenciei-me na Faculdade de Ciências da Nutrição de Universidade do Porto e desde então tenho trabalho na área de Nutrição Clínica. <br/>
                                                      Ao longo do meu percurso como estudante, e como pessoa ativa que sou, não me limitei apenas a estudar. Procurei realizar inúmeros estágios voluntários no sentido de me enriquecer como pessoa e futura profissional. Fazem parte destes: o acompanhamento de consultas de Nutrição em Clínicas privadas, o estágio Hospital da Santa Casa da Misericórdia de Marco de Canaveses e Lar da Santa Casa da Misericórdia de Marco de Canaveses; Centro de Medicina Desportiva do Porto entre outros projetos de educação alimentar em escolas básicas.<br/>
                                                      Como a sabedoria é o bem mais precioso que temos, tirei um curso de Nutricoach para poder dar um serviço diferenciador aos meus pacientes.
                </p> 
              

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
