import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/common/SubmitButton";
import useAuthValues from "../hooks/useAuthValues";

export default function Login() {
    const { processLogin, authError, isLoading } = useAuthValues();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    //login method (sign in)
    const handleSubmit = (e) => {
        e.preventDefault();
        processLogin(email, password, location, navigate);
    };

    return (
        <div>
            <h2 className="mt-10 text-center text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                Sign in to your account
            </h2>
            <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-secondary-blue hover:text-secondary-blue/80">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <SubmitButton
                    disabled={isLoading}
                    type="submit"
                    extraClasses="px-2 py-2 font-semibold"
                >
                    Sign in
                </SubmitButton>
            </form>

            <p className="font-semibold text-secondary-red my-2">{authError}</p>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link to="/register" className="font-semibold leading-6 text-secondary-blue hover:text-secondary-blue/80">
                    Sign Up Now
                </Link>
            </p>
        </div>
    );
}
