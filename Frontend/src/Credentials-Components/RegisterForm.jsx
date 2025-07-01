import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";


const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Please accept the terms");
      return;
    }
    navigate("/loginform",{state:formData});
    console.log("Form submitted", formData);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="logo">
          <span role="img" aria-label="hat">
            🎓
          </span>
          <span className="logo-text">The Digital Learning</span>
        </div>
        <h2>Create an Account</h2>
        <p>Join our community of learners</p>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label>
              I agree to the <span className="link">Terms of Service</span> and{" "}
              <span className="link">Privacy Policy</span>
            </label>
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="already-login">
          Already have an account? <span className="link" onClick={()=>navigate("/loginform")}>Login</span>
        </div>

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

export default RegisterForm;

