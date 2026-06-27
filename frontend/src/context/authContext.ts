import { createContext } from 'react';

export interface AuthUser {
    [key: string]: unknown;
}

export interface AuthContextType {
    user: AuthUser | null;
    token: string | null;
    isLoading: boolean;
    login: (newToken: string, newUser: AuthUser | null) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
