import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

    }

    return (
        <div>
            <div className="bg-base-200 min-h-[92vh] pt-20">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-blue-500 text-center pt-1 pb-4">Already have an account? please <Link to="/login" className="underline underline-offset-1">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;