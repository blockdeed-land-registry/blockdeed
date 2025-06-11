import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/ownership-certificates')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/ownership-certificates"!</div>
}
