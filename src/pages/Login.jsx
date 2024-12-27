import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation: Ensure both fields are filled out
    if (!email || !password) {
      setError("Both email and password are required!");
      return;
    }

    // Simulate login check (you could use an actual API here)
    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      setError("User not found!");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== password) {
      setError("Invalid password!");
      return;
    }

    // Simulate login success
    localStorage.setItem("isLoggedIn", "true");
    setError(null); // Clear any previous errors
    navigate("/home"); // Redirect to Home page after successful login
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-800 rounded-lg">
      <h2 className="text-center text-2xl text-white mb-4">Login</h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 mb-2 w-full rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 mb-2 w-full rounded bg-gray-700 text-white"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full rounded mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
