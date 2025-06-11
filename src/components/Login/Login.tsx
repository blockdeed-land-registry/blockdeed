import { useNavigate } from "@tanstack/react-router"
import { Card, CardContent, CardHeader } from "../ui/card"

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen">
            <Card>
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <label htmlFor="email" className="text-left font-medium">Email</label>
                            <input type="text" id="email" className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className=" font-medium">Password</label>
                            <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={()=>navigate({to:"/user/dashboard"})}>Login</button>
                    </form>
                </CardContent>
                <CardContent className="text-center mt-4">
                    <p className="text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Register here</a>.</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login