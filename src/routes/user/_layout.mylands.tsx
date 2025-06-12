import { createFileRoute } from '@tanstack/react-router'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getLandsByUserId } from '@/lib/axios/land'
import { useAuth } from '@/lib/provider/AuthProvider'
import { Button } from '@/components/ui/button'


export const Route = createFileRoute('/user/_layout/mylands')({
  component: RouteComponent,
  // loader: async ({context})=>{
  //   await context.queryClient.ensureQueryData({
  //     queryKey: ['my-lands'],
  //     queryFn: getLandsByUserId(context?.user?.id)
  //   });
  // }
})

function RouteComponent() {
  const { userAuth } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ['my-lands', userAuth?.user?.id],
    queryFn: async () => await getLandsByUserId(userAuth?.user?.id),
  })

  console.log("My Lands Query: ", data);
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <h3 className="text-xl px-4 py-2 font-bold">My Lands</h3>
        <p className='px-4'>List of lands owned by the user will be displayed here.</p>
        {/* You can add components or logic to display user's lands here */}

        <div className='w-full px-4 py-3'>
          <Card>
            <CardContent>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">S.N.</TableHead>
                    <TableHead>Land ID(Kitta No)</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    data?.data?.map((land, index) => {
                      return (

                        <TableRow>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>{land.landId}</TableCell>
                          <TableCell>{land.areaSize}</TableCell>
                          <TableCell className="text-right">{land.price}</TableCell>
                          <TableCell>{land.city}</TableCell>
                          <TableCell>{land.state}</TableCell>
                          <TableCell>{land.verified ? "Verified" : "Not Verified"}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm" className="w-full mt-2">
                              Transfer Ownership
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
