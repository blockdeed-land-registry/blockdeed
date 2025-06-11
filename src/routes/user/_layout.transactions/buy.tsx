import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/transactions/buy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/transactions/buyer"!</div>
}
