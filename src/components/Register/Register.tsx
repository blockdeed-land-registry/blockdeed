import { Link, useNavigate } from "@tanstack/react-router"
import { Card, CardContent, CardHeader } from "../ui/card"
import { formOptions, useForm } from "@tanstack/react-form";
import { useMutation, } from "@tanstack/react-query";
import { registerAccount } from "@/lib/axios/auth";
import { toast } from "react-toastify";


type RegisterFormValues = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    citizenshipNo: string;
    photo: any;
    password: string;
    confirmPassword: string;
};
const Register = () => {

    // get query
    const { mutate, isPending } = useMutation<unknown, unknown, RegisterFormValues>({
        mutationFn: (values) => {
            return registerAccount(values);
        },
        onSuccess: (data) => {
            console.log("User registered successfully:", data);
            // Navigate to login or home page after successful registration
            navigate({ to: '/' });
        },
        onError: (error) => {
            console.error("Error registering user:", error);
            toast(error?.message || "Registration failed. Please try again.");
        }
    })

    const navigate = useNavigate();

    const formOpts = formOptions({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            citizenshipNo: '',
            photo: null,
            password: '',
            confirmPassword: ''
        }
    })
    const form = useForm({
        ...formOpts,
        onSubmit: ({ value }) => {
            // Handle form submission
            const { confirmPassword, ..._value } = value;
            console.log("Form submitted with values:", value);
            mutate(_value);
        }
    });


    return (
        <div className="flex items-center justify-center my-3">
            <Card>
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    <form className="w-full max-w-md" onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(e)
                        form.handleSubmit(e);
                    }}>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <form.Field name="firstname"
                                    validators={{
                                        onChange: ({ value }) => {
                                            if (value.length < 3) {
                                                return "Minimum 3 characters is required.";
                                            }
                                            return undefined;
                                        },
                                        onBlur: ({ value }) => {
                                            console.log("Blur firstname", value);
                                        },
                                    }}
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">Firstname</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />
                            </div>
                            <div className="mb-4 w-[50%]">

                                <form.Field name="lastname"
                                    validators={{
                                        onChange: ({ value }) => {
                                            if (value.length < 3) {
                                                return "Minimum 3 characters is required.";
                                            }
                                            return undefined;
                                        },
                                        onBlur: ({ value }) => {
                                            console.log("Blur firstname", value);
                                        },
                                    }}
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">Lastname</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />

                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
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
                            <div className="mb-4 w-[50%]">
                                <form.Field name="phone"
                                    validators={{
                                        onBlur: ({ value }) => {
                                            console.log("Blur firstname", value);
                                        }
                                    }}
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">Phone No</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <form.Field name="citizenshipNo"
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">citizenshipNo</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />
                            </div>
                            <div className="mb-4 w-[50%]">
                                <form.Field name="photo"
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">Passport Size Photo</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
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
                            <div className="mb-4 w-[50%]">
                                <form.Field name="confirmPassword"
                                    validators={{
                                        onChangeListenTo: ["password"],
                                        onChange: ({ value, fieldApi }) => {
                                            if (value !== fieldApi.form.getFieldValue("password")) {
                                                return "Passwords do not match";
                                            }
                                            return undefined;
                                        },
                                    }}
                                    children={(field) => {
                                        return (
                                            <>
                                                <label htmlFor={field.name} className="text-left font-medium">Confirm Password</label>
                                                <input type="text" id={field.name} value={field.state.value} onBlur={() => field.handleBlur()} onChange={(e) => field.handleChange(e.target.value)} className="w-full px-3 py-2 border rounded" />
                                                {field.state.meta.errors && (<p className="text-red-500 text-sm mt-1">{field.state.meta.errors.join(",")}</p>)}
                                            </>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <form.Subscribe
                            selector={(state) => [state.canSubmit, state.isSubmitting]}
                            children={([isSubmitting]) => (
                                <input type="submit" disabled={isPending} className={`w-full ${isPending ? "bg-blue-300" : "bg-blue-800 hover:bg-blue-600"}  text-white py-2 rounded `}
                                    value={isPending ? 'Registering...' : 'Register'}
                                />
                            )}
                        />
                    </form>
                </CardContent>
                <CardContent className="text-center mt-4">
                    <p className="text-sm text-gray-500">Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link>.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register