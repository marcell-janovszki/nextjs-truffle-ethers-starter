import { useEthers } from "../providers/EthersProvider"

const CurrentMessage = () => {
  const value = useEthers()
  return (
    <div className="flex gap-2  w-96">
      <div>Current Message: </div>
      <div className="border-2 border-green-800 rounded px-2 flex-1">
        {value ? value : null}
      </div>
    </div>
  )
}

export default CurrentMessage
