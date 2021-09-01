import { useState, useEffect } from "react"

const UpdateMessage = ({ contract }) => {
  const [networkMessage, setNetworkMessage] = useState("")
  const [messageInput, setMessageInput] = useState("")

  function inputHandler(e) {
    setMessageInput(e.target.value)
  }

  async function buttonHandler() {
    const txResponce = await contract.updateMessage(messageInput)
    const txReceipt = await txResponce.wait().then(readNetworkMessage())
    console.log(messageInput)
    console.log(txReceipt)
  }

  function readNetworkMessage() {
    contract.message().then((msg) => {
      setNetworkMessage(msg)
      setMessageInput(msg)
    })
  }

  useEffect(() => {
    readNetworkMessage()
  }, [])

  return (
    <>
      <div className="flex w-96  m-3 justify-center text-blue-700 font-semibold  py-2 border border-blue-500 rounded">
        {networkMessage}
      </div>
      <div className="flex gap-2  w-96 items-center">
        <div>New Message: </div>
        <input
          type="text"
          onChange={inputHandler}
          value={messageInput}
          className="border-2"
        />
        <button
          onClick={buttonHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Update
        </button>
      </div>
    </>
  )
}

export default UpdateMessage
