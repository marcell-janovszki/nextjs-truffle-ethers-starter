import { createContext, useContext, useEffect, useState } from "react"

import { ethers } from "ethers"

const EthereumContext = createContext()

const EthereumProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const [provider, setProvider] = useState("👻")

  function updateProvider(_provider) {
    setProvider(_provider)
    console.log("PROVIDER: ", _provider)
  }

  function setInitialProvider() {
    const ethereum = window.ethereum
    let _provider
    if (ethereum) _provider = new ethers.providers.Web3Provider(ethereum)
    else _provider = new ethers.providers.JsonRpcProvider("http://localhost:9545")
    updateProvider(_provider)
    return _provider
  }

  useEffect(() => {
    setInitialProvider()
    setInitialized(true)
  }, [])

  const variables = { provider }
  const functions = {}

  const value = { ...variables, ...functions }

  return initialized ? <EthereumContext.Provider value={value} {...props} /> : null
}

export const useEthereum = () => {
  return useContext(EthereumContext)
}

export default EthereumProvider
