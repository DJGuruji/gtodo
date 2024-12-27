import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  // Handle logout
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");  // Navigate to the login page after logout
  };

  useEffect(() => {
    // If the user logs in, set the state accordingly
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    
  }, []);

  return (
    <div>
      <Navbar onLogout={logout} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/" element={!isLoggedIn ? <Login /> : <Home />} />
        <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Home />} />
      </Routes>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
