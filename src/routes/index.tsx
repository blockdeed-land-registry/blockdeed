import { createFileRoute } from '@tanstack/react-router'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Login/>
    </div>
  )
}
