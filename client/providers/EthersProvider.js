import { createContext, useContext, useEffect, useState } from "react"

import { ethers } from "ethers"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const EthersContext = createContext()

const CONTRACT_ADDRESS = SimpleMessageArtifact.networks["5777"].address
const ABI = SimpleMessageArtifact.abi

const EthersProvider = (props) => {
  let provider
  let readOnlyContract

  const [initialized, setInitialized] = useState(false)
  const [message, setMessage] = useState()

  const fetchMessage = async (contract) => {
    contract
      .message()
      .then((obj) => obj.toString())
      .then((msg) => setMessage(msg))
  }

  useEffect(() => {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:9545")
    readOnlyContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider)
    fetchMessage(readOnlyContract)
    setInitialized(true)
  }, [])

  return <EthersContext.Provider value={message} {...props} />
}

export const useEthers = () => {
  return useContext(EthersContext)
}

export default EthersProvider
