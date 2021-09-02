import { useEthereum } from "../providers/EthereumProvider"
import { useContract } from "../providers/ContractProvider"

const UpdateMessageButton = () => {
  const { provider } = useEthereum()
  const { contracts } = useContract()

  let contract
  contracts.map((_contract) => {
    if (_contract.name === "SimpleMessage") contract = _contract.contract
  })

  async function buttonHandler() {
    if (!contract) return console.log("<UpdateMessageButton>", "MISSING CONTRACT: SimpleMessage")
    const txResponce = await contract.updateMessage("updated2")
    console.log(txResponce)
    const txReceipt = await txResponce.wait()
    console.log(txReceipt)
  }

  return (
    <button
      onClick={buttonHandler}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    >
      UPDATE
    </button>
  )
}

export default UpdateMessageButton
