import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from '@/components/ui/card'
import { Info } from 'lucide-react'
import { formOptions, useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
const LandRegister = () => {

    const {mutate,isPending} = useMutation({
        mutationFn: async (value:any)=>{
            // Simulate an API call
            console.log("Registering land with:", value);
            // Here you would typically make an API call to register the land
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ success: true, data: value });
                }, 1000);
            });
        }
    })
    const formOpts = formOptions({
    defaultValues: {
      landName: '',
      location: '',
      area: '',
      documents: [],
      description: ''
    }
  })
  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => {
      // Handle form submission
      console.log("Form submitted with values:", value);
    }
  })
  return (
    <div><h3 className="text-xl px-4 py-2 font-bold">Register Your Land</h3>
    <Card className="m-2 p-4 flex justify-between items-center flex-row">
      <Info />
      <p>
        To register your land, please provide the necessary details and documents. 
        Ensure that you have all the required information ready before proceeding.
      </p>
      
    </Card>
    <Card className='mx-2 mt-3 p-4'>
      <CardHeader>
        Header
      </CardHeader>
      <CardContent>
        <form className="w-full max-w-sm" onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(e)
                        form.handleSubmit(e);
                    }}>
                        <div className="mb-4">
                            <form.Field name="email"
                                validators={{
                                    onChange: ({ value }) => {
                                        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                        if (!pattern.test(value)) {
                                            return "Invalid Email Address";
                                        }
                                    },
                                    onBlur: ({ value }) => {
                                        console.log("Blur firstname", value);
                                    },
                                }}
                                children={(field) => {
                                    return (
                                        <>
                                            <label htmlFor={field.name} className="text-left font-medium">Email</label>
                                            <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                            {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <form.Field name="password"
                                validators={{
                                    onChange: ({ value }) => {
                                        if (value.length < 3) {
                                            return "Minimum 3 characters is required.";
                                        }
                                        return undefined;
                                    },
                                    onBlur: ({ value }) => {
                                        console.log("Blur email", value);
                                    },
                                }}
                                children={(field) => {
                                    return (
                                        <>
                                            <label htmlFor={field.name} className="text-left font-medium">Password</label>
                                            <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                            {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <form.Subscribe
                            selector={(state) => [state.canSubmit, state.isSubmitting]}
                            children={([isSubmitting]) => (
                                <input type="submit" disabled={isPending} className={`w-full ${isPending ? "bg-blue-300" : "bg-blue-800 hover:bg-blue-600"}  text-white py-2 rounded `}
                                    value={isPending ? 'Logging In...' : 'Login'}
                                />
                            )}
                        />
                    </form>
      </CardContent>
      <CardFooter>
        Footer
      </CardFooter>
    </Card>
    </div>
  )
}

export default LandRegister