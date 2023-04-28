import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import backgroundImage from '@/images/12.png'


export function Hero() {
  return (
    <main className="overflow-x-hidden bg-slate-200 text-black dark:bg-slate-800 dark:text-white">
    <Container className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 " />
      <div className="mx-auto">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={backgroundImage}
                alt=""
                priority
              />
              <div className="absolute inset-0 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Acompanhamento Nutricional</span>
                <span className="block text-indigo-100">Comece hoje a mudar a sua alimentação</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-300 sm:max-w-3xl">
                Individualizado e ajustado às suas necessidades                    
              </p>
            </div>
          </div>
      </div>
    </Container>
    </main>
  )
}
