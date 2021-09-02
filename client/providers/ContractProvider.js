import { createContext, memo, useContext, useEffect, useState } from "react"

import { ethers } from "ethers"

import { useEthereum } from "./EthereumProvider"

import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const ContractContext = createContext()

const ContractProvider = (props) => {
  const { provider } = useEthereum()
  const [initialized, setInitialized] = useState(false)
  const [contracts, setContracts] = useState([])

  function addContract(name, contract) {
    setContracts([...contracts, { name: name, contract: contract }])
    console.log("LOADED CONTRACT: ", contract)
  }

  useEffect(() => {
    const SimpleMessageContract = new ethers.Contract(
      SimpleMessageArtifact.networks["5777"].address,
      SimpleMessageArtifact.abi,
      provider.getSigner()
    )
    addContract("SimpleMessage", SimpleMessageContract)

    setInitialized(true)
  }, [])

  const variables = { contracts }
  const functions = { addContract }

  const value = { ...variables, ...functions }

  return initialized ? <ContractContext.Provider value={value} {...props} /> : null
}

export const useContract = () => {
  return useContext(ContractContext)
}

export default ContractProvider
