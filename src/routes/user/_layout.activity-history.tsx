import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/activity-history')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/activity-history"!</div>
}
