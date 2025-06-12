import LandRegister from '@/components/LandRegister/LandRegister'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { formOptions, useForm } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { Info } from 'lucide-react'
export const Route = createFileRoute('/user/_layout/register-land')({
  component: RouteComponent,
})

function RouteComponent() {


  return <div>
    <LandRegister />
  </div>
}
