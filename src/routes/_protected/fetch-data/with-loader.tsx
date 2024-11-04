import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search'

export const Route = createFileRoute('/_protected/fetch-data/with-loader')({
  component: RouteComponent,
})

function RouteComponent() {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}?query=react`)
      setData(result.data.hits)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      {loading && <div>Loading...</div>}
      <ul>
        {data.map((item: { objectID: string; url: string; title: string }) => (
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
