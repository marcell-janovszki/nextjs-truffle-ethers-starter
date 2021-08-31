import { useEffect } from "react"

import { ethers } from "ethers"
import SimpleMessageArtifact from "../contracts/SimpleMessage.json"

const CONTRACT_ADDRESS = SimpleMessageArtifact.networks["5777"].address

const EthersTest = () => {
  const [initialized, setInitialized] = useState(false)
  let provider
  let SimpleMessageContract

  useEffect(() => {
    provider = new ethers.providers.JsonRpcProvider("http://localhost:9545")
    SimpleMessageContract = new ethers.Contract(
      SimpleMessageArtifact.address,
      SimpleMessageArtifact.abi,
      provider
    )
    setInitialized(true)
  }, [])

  if(!initialized) return <>loading...</>

  const value = await SimpleMessageContract

}

export default EthersTest
