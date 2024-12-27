import { Link } from "react-router-dom";

const Navbar = ({ onLogout, isLoggedIn }) => {
  return (
    <nav className="p-4 bg-gray-900">
      <ul className="flex justify-between">
        {isLoggedIn ? (
          <>
            <li><Link to="/home" className="text-white">Home</Link></li>
            <li><button onClick={onLogout} className="text-white">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/" className="text-white">Login</Link></li>
            <li><Link to="/signup" className="text-white">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
