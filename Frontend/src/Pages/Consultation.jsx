import React, { useState } from "react";
import "./Consultation.css";

const ConsultationPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleScheduleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Your consultation has been scheduled successfully!");
    setShowForm(false);
  };

  return (
    <div className="consultation-page">
      <h1>🎓 Free Career Consultation</h1>
      <p>
        Our expert career counselors are here to guide you through choosing the right course based on your interests, background, and career goals.
      </p>
      <h3>What You’ll Get:</h3>
     <ul className="benefits-list">
  <li><span className="check">✔️</span> One-on-one session with a career expert</li>
  <li><span className="check">✔️</span> Personalized course recommendations</li>
  <li><span className="check">✔️</span> Guidance on job opportunities</li>
</ul>


      {!showForm ? (
        <button className="schedule-button" onClick={handleScheduleClick}>
          Schedule Your Call Now
        </button>
      ) : (
        <form className="consultation-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="phone" placeholder="Enter your phnone Number"  required/>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ConsultationPage;
