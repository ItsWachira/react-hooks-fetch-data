import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_protected/fetch-data/refetch')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_protected/fetch-data/refetch!'
}
