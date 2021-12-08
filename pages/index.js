import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Name: Swetha Minukuri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Swetha Minukuri" />
        <h1 style={{ color: 'green' }}>This document is valid</h1>
        <Header title="Swetha Minukuri" />
        <Header title="Swetha Minukuri" />
        <Header title="Swetha Minukuri" />
        <Header title="Swetha Minukuri" />
        

      </main>

      <Footer />
    </div>
  )
}
