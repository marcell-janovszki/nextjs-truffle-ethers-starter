import { createContext, useContext, useEffect, useState } from "react"

const ValueContext = createContext()

const ValueProvider = (props) => {
  const [initialized, setInitialized] = useState(false)
  const [values, setValues] = useState([])

  function addValue(name) {
    setValues([...values, { name: name }])
    console.log("LOADED CONTRACT: ", contract)
  }

  useEffect(() => {
    setInitialized(true)
  }, [])

  const variables = { values }
  const functions = {}

  const value = { ...variables, ...functions }

  return initialized ? <ValueContext.Provider value={value} {...props} /> : null
}

export const useEthereum = () => {
  return useContext(ValueContext)
}

export default ValueProvider
