import { createLazyFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_protected/dashboard')({
  component: FileRoute,
});

function FileRoute() {
  return (
    <div>
      <h3>Dashboard Page</h3>
      <nav>
        <ul>
          <li>
            <Link to="/fetch-data/from-state">
              Fetch Data from State Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/using-react-query">
              Fetch Data with Refetch Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/with-form">
              Fetch Data with Form Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/with-loader">
              Fetch Data with Loader Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/with-error-handling">
              Fetch Data with Error Handling Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/using-custom-hook">
              Fetch Data Using Custom Hook Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/with-abort">
              Fetch Data with Abort Example
            </Link>
          </li>
          <li>
            <Link to="/fetch-data/using-react-query">
              Fetch Data Using React Query Example
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
