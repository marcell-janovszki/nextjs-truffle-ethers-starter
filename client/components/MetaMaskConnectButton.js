import { useEthereum } from "../providers/EthereumProvider"

const MetaMaskConnectButton = () => {
  const { provider } = useEthereum()

  async function buttonHandler() {
    const accounts = await provider.send("eth_requestAccounts", []);
    console.log(accounts);
  }

  return (
    <button
      onClick={buttonHandler}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Connect
    </button>
  )
}

export default MetaMaskConnectButton
