import { useNavigate } from "@tanstack/react-router"
import { Card, CardContent, CardHeader } from "../ui/card"

const Register = () => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center my-3">
            <Card>
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-bold">Register</h1>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    <form className="w-full max-w-md">
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="firstname" className="text-left font-medium">Firstname</label>
                                <input type="text" id="firstname" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="lastname" className=" font-medium">Lastname</label>
                                <input type="text" id="lastname" className="w-full px-3 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="email" className="text-left font-medium">Email</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="phone" className=" font-medium">Phone No:</label>
                                <input type="text" id="phone" className="w-full px-3 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="citizenshipNo" className="text-left font-medium">Citizenship No</label>
                                <input type="text" id="citizenshipNo" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="photo" className=" font-medium">Passport Size Photo</label>
                                <input type="file" id="photo" className="w-full px-3 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4 gap-4">
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="password" className="text-left font-medium">Password</label>
                                <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4 w-[50%]">
                                <label htmlFor="confirm-password" className=" font-medium">Confirm Password</label>
                                <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded" />
                            </div>
                        </div>


                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={() => navigate({ to: "/user/dashboard" })}>Register</button>
                    </form>
                </CardContent>
                <CardContent className="text-center mt-4">
                    <p className="text-sm text-gray-500">Already have an account? <a href="/" className="text-blue-500 hover:underline">Login</a>.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register