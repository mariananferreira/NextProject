import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head className='bg-slate-200'>
        <title>Acompanhamento Nutricional</title>
        <meta
          name="description"
          content="mm"
        />
      </Head>
      <main className='bg-slate-200'>
      <Header />
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
      </main>
{/*}      <Footer /> */}
    </>
  )
}
