import { useEthers } from "../providers/EthersProvider"

import Message from "../components/Message"

function HomePage() {
  const { contracts } = useEthers()
  return (
    <div className="flex flex-col items-center">
      <div className="m-4"> Contract [SimpleMessage.sol]</div>
      <Message contract={contracts.SimpleMessage} />
    </div>
  )
}

export default HomePage
