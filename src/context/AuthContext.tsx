import { useMemo, useState } from 'react';
import { AuthContext, type AuthContextType, type AuthUser } from './authContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const getInitialAuthState = () => {
  if (typeof window === 'undefined') {
    return { user: null, token: null, isLoading: false };
  }

  const storedToken = window.localStorage.getItem('token');
  const storedUser = window.localStorage.getItem('user');

  if (!storedToken || !storedUser) {
    return { user: null, token: null, isLoading: false };
  }

  try {
    return {
      user: JSON.parse(storedUser) as AuthUser,
      token: storedToken,
      isLoading: false,
    };
  } catch {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    return { user: null, token: null, isLoading: false };
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialState = useMemo(() => getInitialAuthState(), []);
  const [user, setUser] = useState<AuthUser | null>(initialState.user);
  const [token, setToken] = useState<string | null>(initialState.token);
  const [isLoading] = useState(initialState.isLoading);

  const login = (newToken: string, newUser: AuthUser | null) => {
    window.localStorage.setItem('token', newToken);
    window.localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = useMemo<AuthContextType>(() => ({
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated: !!token && !!user,
  }), [user, token, isLoading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};