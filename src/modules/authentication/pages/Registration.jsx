import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/common/SubmitButton";
import useAuthValues from "../hooks/useAuthValues";

export default function Registration() {
    const { processRegistration, authError } = useAuthValues();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // setSelectedFile(file);

        // Read the selected file and set it as a data URL for preview
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewUrl(event.target.result);
                const base64Image = event.target.result;
                setSelectedFile(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

    //registration method (sign up)
    const handleSubmit = (e) => {
        e.preventDefault();
        processRegistration(email, password, username, bio, selectedFile, location, navigate);
    };

    return (
        <div>
            <h2 className="text-center text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                Sign up to your account
            </h2>

            <form onSubmit={handleSubmit} className="mt-10 space-y-3">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary-blue sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">songo.com/</span>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="johndoe"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
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

                <div>
                    <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                        Bio
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="bio"
                            name="bio"
                            rows={2}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <div className="flex items-center space-x-6">
                    {previewUrl && <div className="shrink-0">
                        <img
                            className="h-16 w-16 object-cover rounded-full"
                            src={previewUrl}
                            alt="Selected"
                        />
                    </div>}
                    <label className="block">
                        <span className="sr-only">Choose Profile Photo</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary-blue/10 file:text-secondary-blue hover:file:bg-violet-100 cursor-pointer" />
                    </label>
                </div>

                <SubmitButton type="submit" extraClasses="px-2 py-2 font-semibold">Sign Up</SubmitButton>
            </form>

            <p className="font-semibold text-secondary-red my-2">{authError}</p>

            <p className="mt-4 text-center text-sm text-gray-500">
                Already a member?{' '}
                <Link to="/login" className="font-semibold leading-6 text-secondary-blue hover:text-secondary-blue/80">
                    Sign In Now
                </Link>
            </p>
        </div>
    );
}
