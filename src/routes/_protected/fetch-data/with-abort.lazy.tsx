import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search';

export const Route = createLazyFileRoute('/_protected/fetch-data/with-abort')({
  component: RouteComponent,
});

function RouteComponent() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const abortControllerRef = React.useRef(new AbortController());

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    abortControllerRef.current = new AbortController(); 

    try {
      const result = await axios.get(`${API}?query=react`, {
        signal: abortControllerRef.current.signal,
      });
      setData(result.data.hits);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  const abortFetch = () => {
    abortControllerRef.current.abort(); 
    console.log('Fetch aborted');
  };

  return (
    <div>
      <h3>Fetch Data with Abort Example</h3>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={abortFetch}>Abort Fetch</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <ul>
        {data.map((item: { objectID: string; url: string; title: string }) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}