import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search'

export const Route = createLazyFileRoute(
  '/_protected/fetch-data/with-error-handling',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${API}?query=react`)
        setData(result.data.hits)
      } catch (err) {
        setError('Failed to fetch data' as any)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <ul>
      {data.map((item: { objectID: string; url: string; title: string }) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
