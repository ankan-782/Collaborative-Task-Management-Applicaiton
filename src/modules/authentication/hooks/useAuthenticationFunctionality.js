import { useEffect, useState } from "react";

export default function useAuthenticationFunctionality() {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const localStorageUserInfo = localStorage.getItem("authenticatedUser");

        if (localStorageUserInfo) {
            const authenticatedUser = JSON.parse(localStorageUserInfo);

            if (authenticatedUser?.email) {
                setUser(authenticatedUser);
            }
        } else {
            setUser({});
        }

    }, []);

    // Sign in or login
    const processLogin = (email, password, location, navigate) => {
        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if there is a matching user
        const matchingUser = users.find((user) => user.email === email);

        if (matchingUser) {
            if (matchingUser.password === password) {
                setUser(matchingUser);
                localStorage.setItem('authenticatedUser', JSON.stringify(matchingUser));

                // Handle successful login, e.g., redirect to dashboard
                const destination = location?.state?.from || '/dashboard';
                navigate(destination);
            } else {
                // Handle incorrect password
                setAuthError("Your password is incorrect");
            }
        } else {
            setAuthError("User not found");
        }
    };


    // Sign up or Registration
    const processRegistration = (email, password, username, bio, selectedFile, location, navigate) => {
        // Retrieve the existing array from localStorage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists in the array
        const userExists = existingUsers.some((user) => user.email === email);
        if (userExists) {
            alert('This email already exists. Please choose a different one.');
            return;
        } else {
            // Add the new user to the array
            const newUser = { email, password, username, bio, selectedFile };
            existingUsers.push(newUser);
            setUser(newUser);

            // Update localStorage with the updated array
            localStorage.setItem('users', JSON.stringify(existingUsers));
            localStorage.setItem('authenticatedUser', JSON.stringify(newUser));

            // Handle successful registration, e.g., redirect to dashboard
            const destination = location?.state?.from || '/dashboard';
            navigate(destination);
        }
    };

    // Function to handle logout
    const logout = () => {
        // Clear the logged-in user state
        setUser({});
        localStorage.removeItem('authenticatedUser');
    };

    return {
        user,
        setUser,
        authError,
        setAuthError,
        isLoading,
        setIsLoading,
        processLogin,
        processRegistration,
        logout,
    };
}