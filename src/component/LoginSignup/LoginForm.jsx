import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/useAuth"; // Import React Query hook
import "./LoginSignup.css";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";

export const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutation = useAuth(); // Use React Query mutation

  // State for email, password, and role selection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER"); // Default to CUSTOMER
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    loginMutation.mutate(
      { email, password, role },
      {
        onSuccess: (data) => {
          localStorage.setItem("jwt", data.token); // Store JWT
          localStorage.setItem("role", data.role); // Store user role

          // Navigate based on role
          navigate(data.role === "CUSTOMER" ? "/home" : "/home/supplierDashboard");
        },
        onError: (error) => {
          setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
        },
      }
    );
  };

  return (
    <div>
      {/* Home Icon to go back */}
      <HomeIcon sx={{ color: "white", mx: 2, my: 2, fontSize: "2rem" }} onClick={() => navigate("/home")} />

      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <EmailIcon sx={{ mx: 2 }} />
            <input 
              type="email" 
              placeholder="Email Id" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="input">
            <LockIcon sx={{ mx: 2 }} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {/* Role Selection Dropdown */}
          <div className="input">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="CUSTOMER">Customer</option>
              <option value="SUPPLIER">Supplier</option>
            </select>
          </div>
        </div>

        {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>

        <div className="submit-container">
          <button 
            className="submit" 
            onClick={handleLogin} 
            disabled={loginMutation.isLoading}
          >
            {loginMutation.isLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="signup-message">
          Don't have an account? <span onClick={() => navigate("/home/signup")}>Sign Up!</span>
        </div>
      </div>
    </div>
  );
};