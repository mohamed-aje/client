import { Navigate } from "react-router-dom";
import { useLocalState } from "./utils/useLocalStorage";

const PrivateRoute = ({ children }) => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
