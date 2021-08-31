import "tailwindcss/tailwind.css"

import { useEffect } from "react"

import { ethers } from "ethers"
import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const CONTRACT_ADDRESS = SimpleMessageArtifact.networks["5777"].address

function App({ Component, pageProps }) {
  let provider

  useEffect(() => {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:9545")
    console.log(provider)
  }, [])

  return <Component {...pageProps} />
}

export default App
