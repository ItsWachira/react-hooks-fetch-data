import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { createRouter, ErrorComponent, RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "./index.css"

// Create a new router instance
const router = createRouter({
    routeTree,
    defaultNotFoundComponent: () => {
        return (
            <div style={{ color: 'red' }}>
                <div>Page Not Found!</div>
                <div>404 Not Found</div>
            </div>
        )
    },
    defaultErrorComponent: ({ error }) => {
        if (error instanceof Error) {
            // Render a custom error message
            return (
                <div style={{ color: 'red' }}>
                    <div>Error!</div>
                    <div>{error.message}</div>
                </div>
            )
        }

        // Fallback to the default ErrorComponent
        return <ErrorComponent error={error} />
    },
});

// Create a QueryClient instance
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
);