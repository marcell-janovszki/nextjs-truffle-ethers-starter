import { useEffect, useState } from "react"

import MetaMaskConnectButton from "../components/MetaMaskConnectButton"
import UpdateMessageButton from "../components/UpdateMessageButton"

import { useContract } from "../providers/ContractProvider"

function HomePage() {
  const { contracts } = useContract()

  const [message, setMessage] = useState()

  useEffect(async () => {
    const _message = await contracts[0].contract.message()
    setMessage(_message)
  }, [])
  // when not commented out,
  // it errors out without an address even though im just trying to read data and not send a transaction..

  return (
    <div className="flex flex-col items-center">
      home_page
      <MetaMaskConnectButton />
      {message ? message : null}
      <UpdateMessageButton />
    </div>
  )
}

export default HomePage
