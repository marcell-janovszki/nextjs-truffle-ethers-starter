import "tailwindcss/tailwind.css"

import Head from "next/head"

import EthereumProvider from "../providers/EthereumProvider"
import ContractProvider from "../providers/ContractProvider"
import ValueProvider from "../providers/ValueProvider"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SimpleMessage.sol</title>
      </Head>
      <EthereumProvider>
        <ContractProvider>
          <ValueProvider>
            <Component {...pageProps} />
          </ValueProvider>
        </ContractProvider>
      </EthereumProvider>
    </>
  )
}

export default App
