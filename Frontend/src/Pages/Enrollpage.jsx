import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./Enrollpage.css";

const EnrollPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [course, setCourse] = useState(location.state?.course || null);
  const [loading, setLoading] = useState(!course);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");

  useEffect(() => {
    if (!course && id) {
      fetch(`https://mern-stack-1-71po.onrender.com/courses/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch course");
          return res.json();
        })
        .then((data) => {
          setCourse(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading course:", err);
          setLoading(false);
        });
    }
  }, [id, course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      setPinError("Please select a payment method.");
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      setPinError("Enter a valid 4-digit PIN.");
      return;
    }

    setPinError("");

    navigate("/payment-success", {
      state: {
        course,
        paymentMethod,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found.</p>;

  return (
    <div className="enroll-page">
      <h2>Enroll in: {course.title}</h2>
      <img src={course.imageUrl} alt={course.title} className="course-image" />
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Price:</strong> ₹{course.price}</p>
      <p><strong>Rating:</strong> ★ {course.rating}</p>

      <div className="payment-section">
        <h3>Choose Payment Method</h3>
        <form onSubmit={handleSubmit} className="payment-form">
          {["Credit Card", "Google Pay", "PhonePe", "UPI"].map((method) => (
            <div className="payment-option" key={method}>
              <input
                type="radio"
                id={method}
                name="payment"
                value={method}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setPin("");
                  setPinError("");
                }}
              />
              <label htmlFor={method}>
                {method === "Credit Card" && "💳 "}
                {method === "Google Pay" && "📱 "}
                {method === "PhonePe" && "📲 "}
                {method === "UPI" && "🔗 "}
                {method}
              </label>
            </div>
          ))}

          {paymentMethod && (
            <div className="pin-section">
              <label>Enter 4-digit PIN for {paymentMethod}:</label>
              <input
                type="password"
                maxLength="4"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="pin-input"
              />
              {pinError && <p className="error-text">{pinError}</p>}
            </div>
          )}

          <button type="submit" className="pay-button">Proceed to Pay</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollPage;
