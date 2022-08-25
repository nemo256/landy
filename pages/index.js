import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS | TailwindCSS</title>
        <meta name="description" content="Landing page template using NextJS and TailwindCSS!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <header className="sm:text-l md:text-xl bg-primary text-secondary text-center p-4 font-bold">Navbar</header>
        <main className="flex-grow sm:text-l md:text-xl bg-primary text-secondary text-center p-16 font-bold">Main</main>
        <footer className="sm:text-l md:text-xl bg-secondary text-primary text-center p-4 font-bold">Footer</footer>
      </div>
    </>
  )
}
