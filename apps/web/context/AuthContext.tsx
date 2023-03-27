import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../packages/types/src/auth/auth-context.types';
import { User } from '../../../packages/types/src/auth/user.types';
import { ChildrenProps } from '../../../packages/types/src/props/children.types';

import { Loader } from 'ui';

const authContextDefaultValues: AuthContext = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContext>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const userJson = sessionStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    } else {
      return null;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        setIsLoading(false); // Set isLoading to false once the user is authenticated
      } else {
        sessionStorage.removeItem('user');
        setIsLoading(false); // Set isLoading to false even if the user is not authenticated
      }
    }
  }, [user]);

  const login = (user: User) => {
    setUser(user);
    return user;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  if (isLoading) {
    return <Loader />; // Render a loading bar if isLoading is true
  }

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
