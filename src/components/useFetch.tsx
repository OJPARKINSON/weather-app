import { useState, useEffect } from "react"

const useFetch = (params = "") => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.weatherbit.io/v2.0";
      if (data != null) return
      setIsLoading(true)
      try {
        const response = await fetch(`${url}${params}&key=e385b0c417dd40c79b23b5d2591dc8b6`)
        const result = await response.json()
        console.log(result, response)
        if (response.ok) {
          setData(result)
        } else {
          setHasError(true)
          setErrorMessage(result)
        }
        setIsLoading(false)
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  return { data, isLoading, hasError, errorMessage }
}

export default useFetch
