import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent actual form submission
    alert("Login successful!");
       navigate("/Herosection");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <span className="cap-icon">🎓</span>
          <span className="logo-text">The Digital Learning</span>
        </div>
        <h2 className="welcome-title">Welcome Back</h2>
        <p className="login-subtitle">Login to access your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Your email" required />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <input type="password" placeholder="Your password" required />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-button">Login</button>

          <p className="register-text">
            Don't have an account? <a href="/RegisterForm">Register</a>
          </p>
        </form>
        <div className="divider">
          <hr />
          <span>Or register with</span>
          <hr />
        </div>

        <div className="social-buttons">
          <button className="social-btn google-btn">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google"
            />
            Google
          </button>
          <button className="social-btn linkedin-btn">
            <img
              src="https://img.icons8.com/color/16/000000/linkedin.png"
              alt="LinkedIn"
            />
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
