import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search'

export const Route = createLazyFileRoute('/_protected/fetch-data/with-form')({
  component: RouteComponent,
})

function RouteComponent() {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [query, setQuery] = React.useState('react')

  const fetchData = async (query: string) => {
    setLoading(true)
    const result = await axios(`${API}?query=${query}`)
    setData(result.data.hits)
    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData(query)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((item: { objectID: string; url: string; title: string }) => (
            <li key={item.objectID}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
