import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/explore-lands')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/explorelands"!</div>
}
