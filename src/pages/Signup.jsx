import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError("User already exists!");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem(email, JSON.stringify(newUser));

    // After successful signup, redirect to login page
    navigate("/login");
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-800 rounded-lg">
      <h2 className="text-center text-2xl text-white mb-4">Sign Up</h2>
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="p-2 mb-2 w-full rounded bg-gray-700 text-white"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleSignup}
          className="bg-blue-500 text-white p-2 w-full rounded mt-4"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
