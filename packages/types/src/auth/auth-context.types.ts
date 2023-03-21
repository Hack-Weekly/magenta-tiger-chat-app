import { User } from "./user.types";

export type AuthContext = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};
