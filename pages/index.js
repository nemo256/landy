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
      <h1 className="text-xl md:text-5xl font-bold underline">
        NextJS + TailwindCSS!
      </h1>
    </>
  )
}
