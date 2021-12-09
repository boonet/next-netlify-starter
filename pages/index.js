import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Name: Swetha Minukuri - Document Validity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header  style={{color:green}} title="This document is valid" />
    <div>
        <p style={{ color: 'green' }}>Name: Swetha minukuri </p>
        <p> Test:	Fit to fly PCR </p>
        <p> Test Location: Dagenham Asda, Greater London </p>
        <p>RESULT: NEGATIVE</p>
        <p> Generated at:	2021-12-09 07:20 </p>
        <p> File name:	Swetha_Minukuri_20211209_222011.pdf </p>
        <p> Serial number:	142182072934 </p>
        <p> Document hash:	2dda10d657f1ce21904e2ebe546fc58d42ce25f768c309de1e843ed4b0ba592d </p>
     </div>

      </main>

      <Footer />
    </div>
  )
}
