import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { course, paymentMethod } = location.state || {};

  return (
    <div className="payment-success">
      <h2>✅ Payment Successful!</h2>
      <p><strong>Course:</strong> {course?.title}</p>
      <p><strong>Method:</strong> {paymentMethod}</p>
      <p>Thank you! You are now enrolled in this course.</p>
    </div>
  );
};

export default Payment;
