import Head from 'next/head'
import { Layout } from 'components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // multiple Head sections are merged.
  // Also latest values are used from multiple Head sections
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta description="" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
