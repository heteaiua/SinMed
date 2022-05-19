import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  patientId: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
