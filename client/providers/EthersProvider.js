import { createContext, memo, useContext, useEffect, useState } from "react"

import { ethers } from "ethers"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const EthersContext = createContext()

const CONTRACT_ADDRESS = SimpleMessageArtifact.networks["5777"].address
const ABI = SimpleMessageArtifact.abi

const EthersProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const [provider, setProvider] = useState()
  const [contracts, setContracts] = useState()

  useEffect(() => {
    const _provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:9545"
    )
    setProvider(_provider)

    const SimpleMessage = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      _provider.getSigner()
    )

    setContracts({
      SimpleMessage: SimpleMessage,
    })

    setInitialized(true)
  }, [])

  const variables = { provider, contracts }
  const functions = {}

  const value = { ...variables, ...functions }

  return initialized ? (
    <EthersContext.Provider value={value} {...props} />
  ) : null
}

export const useEthers = () => {
  return useContext(EthersContext)
}

export default memo(EthersProvider)
