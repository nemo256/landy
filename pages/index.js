import Head from 'next/head'
import Image from 'next/image'

// custom imports
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page template using NextJS and TailwindCSS!" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default Home
