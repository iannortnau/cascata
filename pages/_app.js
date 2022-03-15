import '../styles/globals.css'
import '../styles/w3.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
            <title>Cascata</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
