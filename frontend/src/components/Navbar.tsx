import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between">
      <Link to="/">CV Assistant</Link>
      <div className="flex gap-4">
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {token && (
          <>
            <Link to="/upload">Upload CV</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
