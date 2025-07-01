import React from 'react';
import './Contact.css';
import { FiMail } from 'react-icons/fi'
import Footer from './Footer/Footer';


const ContactSection = () => {
const faqData = [
    {
      question: 'How do I enroll in a course?',
      answer:
        'You can enroll in a course by visiting our Courses page, selecting the course of your interest, and clicking on the "Enroll Now" button. Follow the instructions to complete the registration process.',
    },
    {
      question: 'Do you offer placement assistance?',
      answer:
        'Yes, we provide comprehensive placement assistance including resume building, mock interviews, and direct referrals to our 500+ hiring partners. Our placement team works closely with students to help them secure their dream jobs.',
    },
    {
      question: 'Are there any prerequisites for your courses?',
      answer:
        "Prerequisites vary by course. Basic courses don't require prior experience, while advanced courses may need fundamental knowledge. Check the specific course page for detailed prerequisites, or contact our admissions team for guidance.",
    },
    {
      question: 'Do you offer flexible payment options?',
      answer:
        'Yes, we offer various payment plans including installment options and educational loans through our banking partners. Contact our financial aid office for more information on payment flexibility.',
    },
  ];
  return (
    <>
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or need more information? We're here to help you take the next step in your career journey.
        </p>
      </div>
    </section>
    <section>
      <div className="contact-cards">
        <div className="card">
          <div className="icon">📍</div>
          <h3>Our Location</h3>
          <p>123 4th Block, Reborn Valley<br />Hyderabad 50001</p>
        </div>

        <div className="card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 1234567890<br />+91 1234567890</p>
        </div>

        <div className="card">
          <div className="icon">✉️</div>
          <h3>Email Us</h3>
          <p>info@thedigitallearning.com<br />admissions@thedigitallearning.com</p>
        </div>

        <div className="card">
          <div className="icon">⏰</div>
          <h3>Working Hours</h3>
          <p>Monday - Friday: 9AM - 7PM<br />Saturday: 9AM - 5PM</p>
        </div>
      </div>
    </section>
    <section>
        <div className="form-wrapper">
      <div className="contact-form">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>
        </div>

        <form onSubmit={(e) => {
    e.preventDefault(); 
    alert("Message sent successfully! We will get in touch with you.");
  }}>
          
          <label>
            Full Name *
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email Address *
            <input type="email" name="email" placeholder="Your email" required />
          </label>
          <label>
            Phone Number *
            <input type="tel" name="phone" placeholder="Your phone number" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Subject of your message" />
          </label>
          <label>
            Your Message *
            <textarea name="message" placeholder="How can we help you?" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="location-map">
        <h2>Our Location</h2>
        <p>Visit our campus and experience our state-of-the-art facilities and learning environment.</p>
        <iframe
          src="https://onefivenine.com/images/GoogleMapImages/17_4978_4.jpg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </section>
     <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find quick answers to common questions about our programs and services.
        </p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-card">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-contact">
          <p>Still have questions? Reach out to our support team.</p>
          <p className="faq-email">
            <FiMail className="mail-icon" />
            <span>support@edumentor.com</span>
          </p>
        </div>
      </section>
      <section>


<div className="social-media-section">
      <h1>Connect With Us</h1>
      <p>Follow us on social media to stay updated with the latest tech trends, events, and success stories.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactSection;
