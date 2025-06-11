import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/dashboard"!</div>
}
