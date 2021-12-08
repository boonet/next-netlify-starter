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
        <p className="description">
          Application ID: 27373838
          Fit to fly PCR - Sampling Site - Negative

        </p>
      </main>

      <Footer />
    </div>
  )
}
