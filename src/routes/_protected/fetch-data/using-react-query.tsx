import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search';

export const Route = createFileRoute('/_protected/fetch-data/using-react-query')({
  component: RouteComponent,
});

function RouteComponent() {
 
  const { data: items = [], isLoading, error } = useQuery({
    queryKey: ['searchResults', 'react'], 
    queryFn: async () => {
      const response = await axios.get(`${API}?query=react`);
      return response.data.hits; 
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {items.map((item: { objectID: string; url: string; title: string }) => (
        <li key={item.objectID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
