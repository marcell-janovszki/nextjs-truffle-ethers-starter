import "tailwindcss/tailwind.css"

import Head from "next/head"

import EthersProvider from "../providers/EthersProvider"

function App({ Component, pageProps }) {
  return (
    <>
    <Head><title>SimpleMessage.sol</title></Head>
    <EthersProvider>
      <Component {...pageProps} />
    </EthersProvider>
    </>
  )
}

export default App
