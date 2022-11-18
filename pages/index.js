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
        <title>Landy</title>
        <meta name="description" content="Landy is a landing page template built using NextJS and TalwindCSS." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="max-w-screen-xl mx-auto flex flex-col h-screen justify-between scroll-smooth snap-y snap-mandatory">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default Home
