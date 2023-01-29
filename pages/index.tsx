import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
      </Head>
  
    <Header />

    <section id='hero' className='snap-center'>
      <Hero />
    </section>

    <section id= "about" className='snap-center'>
      <About />
    </section>

    {/* Experience */}

    {/* Skills */}

    {/* Peoject */}

    {/* Contact Me */}
    </div>
  )
}
