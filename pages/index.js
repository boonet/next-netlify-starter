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
<ul class="list-group identity-list">
   <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>
         <label style="color:green;"><strong>This is a valid document.</strong></label><br>
         <table cellpadding="3" style="table-layout:fixed;" width="100%">
            <tbody>
               <tr>
                  <td width="50%"><label>File name: </label></td>
                  <td width="50%" style="max-width: 400px;word-wrap: break-word;overflow:hidden;">Swetha_Minukuri_20211208_222011.pdf</td>
               </tr>
               <tr>
                  <td width="50%"><label>Generated at: </label></td>
                  <td width="50%"><label>2021-12-08 22:20</label></td>
               </tr>
               <tr>
                  <td width="50%"><label>Serial number: </label></td>
                  <td width="50%"><label>142182072934</label></td>
               </tr>
               <tr>
                  <td width="50%"><label>Document hash: </label></td>
                  <td width="50%" style="word-wrap: break-word;overflow:hidden;">2dda10d657f1ce21904e2ebe546fc58d42ce25f768c309de1e843ed4b0ba592d</td>
               </tr>
            </tbody>
         </table>
      </span>
   </li>
</ul>

        </p>
      </main>

      <Footer />
    </div>
  )
}
