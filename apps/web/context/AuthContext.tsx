import { createContext, useContext, useState } from "react";
import { AuthContext } from "../../../packages/types/src/auth/auth-context.types";
import { User } from "../../../packages/types/src/auth/user.types";
import { ChildrenProps } from "../../../packages/types/src/props/children.types";

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
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
