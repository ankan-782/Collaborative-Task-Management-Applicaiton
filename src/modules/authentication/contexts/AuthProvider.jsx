import { createContext } from 'react';
import useAuthenticationChecked from '../hooks/useAuthenticationFunctionality';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const authValues = useAuthenticationChecked();
    return (
        <div>
            <AuthContext.Provider value={authValues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
export default AuthProvider;