import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export default function useAuthValues() {
    return useContext(AuthContext);
}