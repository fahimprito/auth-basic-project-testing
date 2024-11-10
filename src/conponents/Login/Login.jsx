import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    }

    return (
        <div>
            <div className="bg-base-200 min-h-[92vh] pt-20">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="password"
                                    className="input input-bordered" required />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    type="button"
                                    className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-12 ">
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-blue-500 text-center pt-1 pb-4">New to this website? please <Link to="/register" className="underline underline-offset-1">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;