import { useEthereum } from "../providers/EthereumProvider"
import { useContract } from "../providers/ContractProvider"

import MetaMaskConnectButton from "../components/MetaMaskConnectButton"
import UpdateMessageButton from "../components/UpdateMessageButton"
import ValueBinding from "../components/ValueBinding"

function HomePage() {
  const { contracts } = useContract()
  const { address } = useEthereum()

  return (
    <div className="flex flex-col items-center">
      {address && address.length > 0 ? address : <MetaMaskConnectButton />}
      <ValueBinding contract={contracts[0].contract} valueName="message()" />
      <UpdateMessageButton />
    </div>
  )
}

export default HomePage
