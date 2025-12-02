import { createContext } from "react";

export interface AuthContextType {
  token: string | null;
  login: (t: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});
