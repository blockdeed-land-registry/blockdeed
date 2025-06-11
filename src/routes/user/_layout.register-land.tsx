import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/_layout/register-land')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/_layout/register-land"!</div>
}
