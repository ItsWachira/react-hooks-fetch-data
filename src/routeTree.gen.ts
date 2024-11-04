/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/_public'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as ProtectedFetchDataWithLoaderImport } from './routes/_protected/fetch-data/with-loader'
import { Route as ProtectedFetchDataUsingReactQueryImport } from './routes/_protected/fetch-data/using-react-query'
import { Route as ProtectedFetchDataUsingCustomHookImport } from './routes/_protected/fetch-data/using-custom-hook'

// Create Virtual Routes

const PublicRegisterLazyImport = createFileRoute('/_public/register')()
const PublicLoginLazyImport = createFileRoute('/_public/login')()
const ProtectedHomeLazyImport = createFileRoute('/_protected/home')()
const ProtectedDashboardLazyImport = createFileRoute('/_protected/dashboard')()
const ProtectedFetchDataWithFormLazyImport = createFileRoute(
  '/_protected/fetch-data/with-form',
)()
const ProtectedFetchDataWithErrorHandlingLazyImport = createFileRoute(
  '/_protected/fetch-data/with-error-handling',
)()
const ProtectedFetchDataWithAbortLazyImport = createFileRoute(
  '/_protected/fetch-data/with-abort',
)()
const ProtectedFetchDataRefetchLazyImport = createFileRoute(
  '/_protected/fetch-data/refetch',
)()
const ProtectedFetchDataFromStateLazyImport = createFileRoute(
  '/_protected/fetch-data/from-state',
)()

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const PublicRegisterLazyRoute = PublicRegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => PublicRoute,
} as any).lazy(() =>
  import('./routes/_public/register.lazy').then((d) => d.Route),
)

const PublicLoginLazyRoute = PublicLoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => PublicRoute,
} as any).lazy(() => import('./routes/_public/login.lazy').then((d) => d.Route))

const ProtectedHomeLazyRoute = ProtectedHomeLazyImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => ProtectedRoute,
} as any).lazy(() =>
  import('./routes/_protected/home.lazy').then((d) => d.Route),
)

const ProtectedDashboardLazyRoute = ProtectedDashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => ProtectedRoute,
} as any).lazy(() =>
  import('./routes/_protected/dashboard.lazy').then((d) => d.Route),
)

const ProtectedFetchDataWithFormLazyRoute =
  ProtectedFetchDataWithFormLazyImport.update({
    id: '/fetch-data/with-form',
    path: '/fetch-data/with-form',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/fetch-data/with-form.lazy').then(
      (d) => d.Route,
    ),
  )

const ProtectedFetchDataWithErrorHandlingLazyRoute =
  ProtectedFetchDataWithErrorHandlingLazyImport.update({
    id: '/fetch-data/with-error-handling',
    path: '/fetch-data/with-error-handling',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/fetch-data/with-error-handling.lazy').then(
      (d) => d.Route,
    ),
  )

const ProtectedFetchDataWithAbortLazyRoute =
  ProtectedFetchDataWithAbortLazyImport.update({
    id: '/fetch-data/with-abort',
    path: '/fetch-data/with-abort',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/fetch-data/with-abort.lazy').then(
      (d) => d.Route,
    ),
  )

const ProtectedFetchDataRefetchLazyRoute =
  ProtectedFetchDataRefetchLazyImport.update({
    id: '/fetch-data/refetch',
    path: '/fetch-data/refetch',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/fetch-data/refetch.lazy').then((d) => d.Route),
  )

const ProtectedFetchDataFromStateLazyRoute =
  ProtectedFetchDataFromStateLazyImport.update({
    id: '/fetch-data/from-state',
    path: '/fetch-data/from-state',
    getParentRoute: () => ProtectedRoute,
  } as any).lazy(() =>
    import('./routes/_protected/fetch-data/from-state.lazy').then(
      (d) => d.Route,
    ),
  )

const ProtectedFetchDataWithLoaderRoute =
  ProtectedFetchDataWithLoaderImport.update({
    id: '/fetch-data/with-loader',
    path: '/fetch-data/with-loader',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedFetchDataUsingReactQueryRoute =
  ProtectedFetchDataUsingReactQueryImport.update({
    id: '/fetch-data/using-react-query',
    path: '/fetch-data/using-react-query',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedFetchDataUsingCustomHookRoute =
  ProtectedFetchDataUsingCustomHookImport.update({
    id: '/fetch-data/using-custom-hook',
    path: '/fetch-data/using-custom-hook',
    getParentRoute: () => ProtectedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_protected/dashboard': {
      id: '/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/home': {
      id: '/_protected/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof ProtectedHomeLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_public/login': {
      id: '/_public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof PublicLoginLazyImport
      parentRoute: typeof PublicImport
    }
    '/_public/register': {
      id: '/_public/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof PublicRegisterLazyImport
      parentRoute: typeof PublicImport
    }
    '/_protected/fetch-data/using-custom-hook': {
      id: '/_protected/fetch-data/using-custom-hook'
      path: '/fetch-data/using-custom-hook'
      fullPath: '/fetch-data/using-custom-hook'
      preLoaderRoute: typeof ProtectedFetchDataUsingCustomHookImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/using-react-query': {
      id: '/_protected/fetch-data/using-react-query'
      path: '/fetch-data/using-react-query'
      fullPath: '/fetch-data/using-react-query'
      preLoaderRoute: typeof ProtectedFetchDataUsingReactQueryImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/with-loader': {
      id: '/_protected/fetch-data/with-loader'
      path: '/fetch-data/with-loader'
      fullPath: '/fetch-data/with-loader'
      preLoaderRoute: typeof ProtectedFetchDataWithLoaderImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/from-state': {
      id: '/_protected/fetch-data/from-state'
      path: '/fetch-data/from-state'
      fullPath: '/fetch-data/from-state'
      preLoaderRoute: typeof ProtectedFetchDataFromStateLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/refetch': {
      id: '/_protected/fetch-data/refetch'
      path: '/fetch-data/refetch'
      fullPath: '/fetch-data/refetch'
      preLoaderRoute: typeof ProtectedFetchDataRefetchLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/with-abort': {
      id: '/_protected/fetch-data/with-abort'
      path: '/fetch-data/with-abort'
      fullPath: '/fetch-data/with-abort'
      preLoaderRoute: typeof ProtectedFetchDataWithAbortLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/with-error-handling': {
      id: '/_protected/fetch-data/with-error-handling'
      path: '/fetch-data/with-error-handling'
      fullPath: '/fetch-data/with-error-handling'
      preLoaderRoute: typeof ProtectedFetchDataWithErrorHandlingLazyImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/fetch-data/with-form': {
      id: '/_protected/fetch-data/with-form'
      path: '/fetch-data/with-form'
      fullPath: '/fetch-data/with-form'
      preLoaderRoute: typeof ProtectedFetchDataWithFormLazyImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

interface ProtectedRouteChildren {
  ProtectedDashboardLazyRoute: typeof ProtectedDashboardLazyRoute
  ProtectedHomeLazyRoute: typeof ProtectedHomeLazyRoute
  ProtectedFetchDataUsingCustomHookRoute: typeof ProtectedFetchDataUsingCustomHookRoute
  ProtectedFetchDataUsingReactQueryRoute: typeof ProtectedFetchDataUsingReactQueryRoute
  ProtectedFetchDataWithLoaderRoute: typeof ProtectedFetchDataWithLoaderRoute
  ProtectedFetchDataFromStateLazyRoute: typeof ProtectedFetchDataFromStateLazyRoute
  ProtectedFetchDataRefetchLazyRoute: typeof ProtectedFetchDataRefetchLazyRoute
  ProtectedFetchDataWithAbortLazyRoute: typeof ProtectedFetchDataWithAbortLazyRoute
  ProtectedFetchDataWithErrorHandlingLazyRoute: typeof ProtectedFetchDataWithErrorHandlingLazyRoute
  ProtectedFetchDataWithFormLazyRoute: typeof ProtectedFetchDataWithFormLazyRoute
}

const ProtectedRouteChildren: ProtectedRouteChildren = {
  ProtectedDashboardLazyRoute: ProtectedDashboardLazyRoute,
  ProtectedHomeLazyRoute: ProtectedHomeLazyRoute,
  ProtectedFetchDataUsingCustomHookRoute:
    ProtectedFetchDataUsingCustomHookRoute,
  ProtectedFetchDataUsingReactQueryRoute:
    ProtectedFetchDataUsingReactQueryRoute,
  ProtectedFetchDataWithLoaderRoute: ProtectedFetchDataWithLoaderRoute,
  ProtectedFetchDataFromStateLazyRoute: ProtectedFetchDataFromStateLazyRoute,
  ProtectedFetchDataRefetchLazyRoute: ProtectedFetchDataRefetchLazyRoute,
  ProtectedFetchDataWithAbortLazyRoute: ProtectedFetchDataWithAbortLazyRoute,
  ProtectedFetchDataWithErrorHandlingLazyRoute:
    ProtectedFetchDataWithErrorHandlingLazyRoute,
  ProtectedFetchDataWithFormLazyRoute: ProtectedFetchDataWithFormLazyRoute,
}

const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
  ProtectedRouteChildren,
)

interface PublicRouteChildren {
  PublicLoginLazyRoute: typeof PublicLoginLazyRoute
  PublicRegisterLazyRoute: typeof PublicRegisterLazyRoute
}

const PublicRouteChildren: PublicRouteChildren = {
  PublicLoginLazyRoute: PublicLoginLazyRoute,
  PublicRegisterLazyRoute: PublicRegisterLazyRoute,
}

const PublicRouteWithChildren =
  PublicRoute._addFileChildren(PublicRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof PublicRouteWithChildren
  '/dashboard': typeof ProtectedDashboardLazyRoute
  '/home': typeof ProtectedHomeLazyRoute
  '/login': typeof PublicLoginLazyRoute
  '/register': typeof PublicRegisterLazyRoute
  '/fetch-data/using-custom-hook': typeof ProtectedFetchDataUsingCustomHookRoute
  '/fetch-data/using-react-query': typeof ProtectedFetchDataUsingReactQueryRoute
  '/fetch-data/with-loader': typeof ProtectedFetchDataWithLoaderRoute
  '/fetch-data/from-state': typeof ProtectedFetchDataFromStateLazyRoute
  '/fetch-data/refetch': typeof ProtectedFetchDataRefetchLazyRoute
  '/fetch-data/with-abort': typeof ProtectedFetchDataWithAbortLazyRoute
  '/fetch-data/with-error-handling': typeof ProtectedFetchDataWithErrorHandlingLazyRoute
  '/fetch-data/with-form': typeof ProtectedFetchDataWithFormLazyRoute
}

export interface FileRoutesByTo {
  '': typeof PublicRouteWithChildren
  '/dashboard': typeof ProtectedDashboardLazyRoute
  '/home': typeof ProtectedHomeLazyRoute
  '/login': typeof PublicLoginLazyRoute
  '/register': typeof PublicRegisterLazyRoute
  '/fetch-data/using-custom-hook': typeof ProtectedFetchDataUsingCustomHookRoute
  '/fetch-data/using-react-query': typeof ProtectedFetchDataUsingReactQueryRoute
  '/fetch-data/with-loader': typeof ProtectedFetchDataWithLoaderRoute
  '/fetch-data/from-state': typeof ProtectedFetchDataFromStateLazyRoute
  '/fetch-data/refetch': typeof ProtectedFetchDataRefetchLazyRoute
  '/fetch-data/with-abort': typeof ProtectedFetchDataWithAbortLazyRoute
  '/fetch-data/with-error-handling': typeof ProtectedFetchDataWithErrorHandlingLazyRoute
  '/fetch-data/with-form': typeof ProtectedFetchDataWithFormLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_protected': typeof ProtectedRouteWithChildren
  '/_public': typeof PublicRouteWithChildren
  '/_protected/dashboard': typeof ProtectedDashboardLazyRoute
  '/_protected/home': typeof ProtectedHomeLazyRoute
  '/_public/login': typeof PublicLoginLazyRoute
  '/_public/register': typeof PublicRegisterLazyRoute
  '/_protected/fetch-data/using-custom-hook': typeof ProtectedFetchDataUsingCustomHookRoute
  '/_protected/fetch-data/using-react-query': typeof ProtectedFetchDataUsingReactQueryRoute
  '/_protected/fetch-data/with-loader': typeof ProtectedFetchDataWithLoaderRoute
  '/_protected/fetch-data/from-state': typeof ProtectedFetchDataFromStateLazyRoute
  '/_protected/fetch-data/refetch': typeof ProtectedFetchDataRefetchLazyRoute
  '/_protected/fetch-data/with-abort': typeof ProtectedFetchDataWithAbortLazyRoute
  '/_protected/fetch-data/with-error-handling': typeof ProtectedFetchDataWithErrorHandlingLazyRoute
  '/_protected/fetch-data/with-form': typeof ProtectedFetchDataWithFormLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/dashboard'
    | '/home'
    | '/login'
    | '/register'
    | '/fetch-data/using-custom-hook'
    | '/fetch-data/using-react-query'
    | '/fetch-data/with-loader'
    | '/fetch-data/from-state'
    | '/fetch-data/refetch'
    | '/fetch-data/with-abort'
    | '/fetch-data/with-error-handling'
    | '/fetch-data/with-form'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/dashboard'
    | '/home'
    | '/login'
    | '/register'
    | '/fetch-data/using-custom-hook'
    | '/fetch-data/using-react-query'
    | '/fetch-data/with-loader'
    | '/fetch-data/from-state'
    | '/fetch-data/refetch'
    | '/fetch-data/with-abort'
    | '/fetch-data/with-error-handling'
    | '/fetch-data/with-form'
  id:
    | '__root__'
    | '/_protected'
    | '/_public'
    | '/_protected/dashboard'
    | '/_protected/home'
    | '/_public/login'
    | '/_public/register'
    | '/_protected/fetch-data/using-custom-hook'
    | '/_protected/fetch-data/using-react-query'
    | '/_protected/fetch-data/with-loader'
    | '/_protected/fetch-data/from-state'
    | '/_protected/fetch-data/refetch'
    | '/_protected/fetch-data/with-abort'
    | '/_protected/fetch-data/with-error-handling'
    | '/_protected/fetch-data/with-form'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  ProtectedRoute: typeof ProtectedRouteWithChildren
  PublicRoute: typeof PublicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  ProtectedRoute: ProtectedRouteWithChildren,
  PublicRoute: PublicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_protected",
        "/_public"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/dashboard",
        "/_protected/home",
        "/_protected/fetch-data/using-custom-hook",
        "/_protected/fetch-data/using-react-query",
        "/_protected/fetch-data/with-loader",
        "/_protected/fetch-data/from-state",
        "/_protected/fetch-data/refetch",
        "/_protected/fetch-data/with-abort",
        "/_protected/fetch-data/with-error-handling",
        "/_protected/fetch-data/with-form"
      ]
    },
    "/_public": {
      "filePath": "_public.tsx",
      "children": [
        "/_public/login",
        "/_public/register"
      ]
    },
    "/_protected/dashboard": {
      "filePath": "_protected/dashboard.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/home": {
      "filePath": "_protected/home.lazy.tsx",
      "parent": "/_protected"
    },
    "/_public/login": {
      "filePath": "_public/login.lazy.tsx",
      "parent": "/_public"
    },
    "/_public/register": {
      "filePath": "_public/register.lazy.tsx",
      "parent": "/_public"
    },
    "/_protected/fetch-data/using-custom-hook": {
      "filePath": "_protected/fetch-data/using-custom-hook.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/using-react-query": {
      "filePath": "_protected/fetch-data/using-react-query.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/with-loader": {
      "filePath": "_protected/fetch-data/with-loader.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/from-state": {
      "filePath": "_protected/fetch-data/from-state.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/refetch": {
      "filePath": "_protected/fetch-data/refetch.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/with-abort": {
      "filePath": "_protected/fetch-data/with-abort.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/with-error-handling": {
      "filePath": "_protected/fetch-data/with-error-handling.lazy.tsx",
      "parent": "/_protected"
    },
    "/_protected/fetch-data/with-form": {
      "filePath": "_protected/fetch-data/with-form.lazy.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */