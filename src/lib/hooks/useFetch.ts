import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search'

export const useFetch = (query: string) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await axios.get(`${API}?query=${query}`)
        setData(result.data.hits)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message)
        } else {
          setError("Failed to fetch data")
        }
      } finally {
        setLoading(false)
      }
    }

    if (query) {
      fetchData()
    }
  }, [query])

  return { data, loading, error }
}
