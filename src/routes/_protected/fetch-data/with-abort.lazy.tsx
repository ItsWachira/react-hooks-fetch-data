import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search'

const useQuery = <T,>(queryFn: () => Promise<T>, queryKey: any[]) => {
  const [data, setData] = React.useState<T | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await queryFn()
        if (!didCancel) setData(result)
      } catch (error) {
        if (!didCancel) setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [...queryKey])

  return { data, isLoading, isError }
}

export const Route = createLazyFileRoute('/_protected/fetch-data/with-abort')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, isError } = useQuery<Array<{ objectID: string; url: string; title: string }>>(
    async () => {
      const result = await axios.get(`${API}?query=react`)
      return result.data.hits
    },
    ['search']
  )

  return (
    <div>
      <h3>Fetch Data with abort Example</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: 'red' }}>Error occurred while fetching data</p>}
      <ul>
        {data?.map((item: { objectID: string; url: string; title: string }) => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
