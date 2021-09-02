import { useEffect, useState } from "react"

const ValueBinding = ({ contract, valueName }) => {
  const [value, setValue] = useState()
  const [getterFunc, setGetterFunc] = useState()

  useEffect(async () => {
    const _value = await contract.callStatic.message()
    setValue(_value)

    const staticMethods = contract.callStatic
    for (const [name, func] of Object.entries(staticMethods)) {
    }
  }, [])

  useEffect(() => {
    contract.on(contract.filters.messageUpdate(), (updatedValue) => {
      setValue(updatedValue)
    })
    console.log("ATTACHED LISTENER: ", "messageUpdate()")

    return function cleanup() {
      contract.off(contract.filters.messageUpdate(), console.log("DETACHED LISTENER: ", "messageUpdate()"))
    }
  }, [])

  return <div>{value ? value : null}</div>
}

export default ValueBinding

// WORKING ON ADDING SUPPORT FOR UPDATING VALUE ON EVENT LISTENER
