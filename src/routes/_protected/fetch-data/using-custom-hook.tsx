import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useFetch } from '../../../lib/hooks/useFetch'

export const Route = createFileRoute(
  '/_protected/fetch-data/using-custom-hook',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [query, setQuery] = React.useState('react')
  const { data, loading} = useFetch(query)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data?.map((item: any) => (
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
