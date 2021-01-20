import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
        <title>博客系统</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
  </div>
  )
}

export default MyApp
