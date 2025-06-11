import { createFileRoute, Outlet } from '@tanstack/react-router'
import Sidebar from "../../components/Sidebar/Sidebar"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export const Route = createFileRoute('/user/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SidebarProvider>
      <Sidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  </div>
}
