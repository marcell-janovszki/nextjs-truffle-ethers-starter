import { useEffect, useState } from "react"

const CurrentMessage = ({ contract }) => {
  const [message, setMessage] = useState()

  useEffect(async () => {
    const msg = await contract.message()
    setMessage(msg)
  }, [])

  return (
    <div className="flex gap-2  w-96">
      <div>Current Message: </div>
      <div className="border-2 border-green-800 rounded px-2 flex-1">
        {message ? message : null}
      </div>
    </div>
  )
}

export default CurrentMessage
