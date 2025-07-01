import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PopularCourses from "./Courses/PopularCourses";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isopen,setisopen] =useState(false);
  const companies = [
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png" },
];
const successData = [
  {
    name: "Adhy Sharma",
    role: "Data Scientist",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "EduMentor's Data Science program completely transformed my career. Within 2 months of completing the program, I landed my dream job at Microsoft.",
    rating: 5,
    ctc: "18 LPA",
  },
  {
    name: "Jhon Karter",
    role: "Full Stack Developer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "After completing the Full Stack program, I received multiple job offers. The hands-on projects and mentorship were invaluable in my journey.",
    rating: 5,
    ctc: "22 LPA",
  },
  {
    name: "Ana James",
    role: "Cloud Architect",
    company: "Amazon Web Services",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial:
      "The Cloud Computing course was comprehensive and up-to-date with industry standards. I was able to transition from a support role to a Cloud Architect.",
    rating: 4.5,
    ctc: "25 LPA",
  },
];
const testimonials = [
  {
    name: "Leo Carter",
    title: "Software Engineer at Google",
    image: "https://example.com/leo.jpg", // Replace with your actual image
    testimonial:
      "I had tried various online courses, but nothing compared to the structured learning and personal mentorship I received at EduMentor. The instructors were knowledgeable and supportive, and the career services team helped me prepare for interviews and negotiate my salary.",
    rating: 5,
  },
  
];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  const features = [
  {
    icon: "💻",
    title: "Expert-Led Training",
    description: "Learn from industry professionals with real-world experience.",
  },
  {
    icon: "🛠️",
    title: "Real Projects",
    description: "Build a portfolio with projects that showcase your skills to employers.",
  },
  {
    icon: "🧑‍💼",
    title: "Placement Support",
    description: "Get interview preparation, resume building, and direct job referrals.",
  },
];

  return (
    <>
      <div className="hero-container">
        <header className="navbar">
          <div className="logo">
            <img
              style={{ width: "50px" }}
              src="https://rukminim2.flixcart.com/image/850/1000/kdga1zk0/graduation-gown/s/d/t/yellow-matte-kids-graduation-gown-and-cap-meraconvocation-original-imafuc79zzxgt6mw.jpeg?q=90&crop=false"
              className="icon"
            />
            <span>Digital Learning</span>
          </div>
           <div className="hamburger" onClick={() => setisopen(!isopen)}>
        ☰
      </div>
          <nav className={`nav-links ${isopen ? 'open' : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/placements">Placements</Link>
            <Link to="/batches">Batches</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className={`auth-buttons ${isopen ? 'open' : ''}`}>
            <Link to="/LoginForm">
              <button className="auth-btn">Login</button>
            </Link>
            <Link to="/RegisterForm">
              <button className="auth-btn">Register</button>
            </Link>
          </div>
        </header>
        <section>
          <div className="hero-section">
            <div className="hero-text">
              <h1>
                Transform your Career
                <br />
                With Expert Training
              </h1>
              <p>
                Join thousands of students who have accelerated their careers
                through our industry-focused training programs.
              </p>
              <div className="hero-buttons">
                <button className="explore-btn">Explore Courses</button>
                <button className="join-btn">Join Now</button>
              </div>
            </div>

            {/* Right Side */}
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                className="hero-image"
              />
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="why-choose-us">
          <h2>Why Choose Digital Learning?</h2>
          <p>
            We're committed to helping students develop the skills they need to
            thrive in today's competitive job market.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <i className="fa-solid fa-calendar icon"></i>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <i className="fa-solid fa-graduation-cap icon"></i>
              <h3>15,000+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-box">
              <i className="fa-solid fa-building icon"></i>
              <h3>500+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-box">
              <i className="fa-solid fa-chalkboard icon"></i>
              <h3>50+</h3>
              <p>Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>
      <PopularCourses />
      <section className="hiring-partners">
      <h2>Our Hiring Partners</h2>
      <p>
        We've partnered with leading companies to help our students land their
        dream jobs.
      </p>

      <div className="partner-logos">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="partner-logo"
          />
        ))}
      </div>

      <button
        className="view-all-companies"
        onClick={() => navigate("/Placements")}
      >
        View All Companies
      </button>
    </section>
     <section className="success-stories">
      <h2>
        <span>Success</span> Stories
      </h2>
      <p>
        Meet our successful alumni who transformed their careers after training
        with us.
      </p>

      <div className="stats">
        <div><strong>98%</strong><span>PLACEMENT RATE</span></div>
        <div><strong>21 LPA</strong><span>AVERAGE SALARY</span></div>
        <div><strong>500+</strong><span>HIRING PARTNERS</span></div>
        <div><strong>5000+</strong><span>GRADUATES PLACED</span></div>
      </div>

      <div className="testimonials">
        {successData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="profile">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p className="role">{item.role}</p>
                <p className="company">@ {item.company}</p>
              </div>
            </div>
            <blockquote>
              <span className="quote">“</span>{item.testimonial}<span className="quote">”</span>
            </blockquote>
            <hr />
            <div className="footer">
              <div className="stars">{"⭐".repeat(Math.floor(item.rating))}</div>
              <span className="ctc">CTC: {item.ctc}</span>
            </div>
          </div>
        ))}
      </div>
       <div className="view-all-container">
    <a href="/Placements" className="view-all-button">
      View All Success Stories
    </a>
  </div>
    </section>
      <section className="student-carousel-section">
      <h2 className="student-carousel-title">
        <span role="img" aria-label="chat">💬</span> What Our Students Say
      </h2>
      <p className="student-carousel-subtext">
        Hear from our students about their learning experience and career transformation.
      </p>

      <div className="student-carousel-card">
        <img
          className="student-carousel-avatar"
          src={"https://randomuser.me/api/portraits/men/54.jpg"}
          alt={testimonials[activeIndex].name}
        />
        <div className="student-carousel-content">
          <p className="student-carousel-quote">“{testimonials[activeIndex].testimonial}”</p>
          <h3 className="student-carousel-name">{testimonials[activeIndex].name}</h3>
          <p className="student-carousel-role">{testimonials[activeIndex].title}</p>
          <div className="student-carousel-stars">{"⭐".repeat(testimonials[activeIndex].rating)}</div>
        </div>
      </div>

      <div className="student-carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`student-carousel-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
    <section>
      <div className="career-section">
      <h2 className="headline">Ready to Accelerate Your Career?</h2>
      <p className="subtext">
        Join thousands of successful graduates who have transformed their careers
        with our industry-focused training and placement support.
      </p>

      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="cta-button">
        Start Your Journey Now
      </button>
    </div>
    </section>
    {/* contact section */}
      <div className="get-in-touch-section">
      <div className="get-in-touch-info">
        <h1>Get in Touch</h1>
        <p>
          Fill out the form and our team will get back to you within 24 hours.
          We're here to help you take the next step in your career journey.
        </p>

        <div className="info-block">
          <span className="icon">📍</span>
          <div>
            <strong>Our Location</strong>
            <p>
              123 4th block, Reborn Valley <br />
              Bangalore, Karnataka 560001
            </p>
          </div>
        </div>

        <div className="info-block">
          <span className="icon">📞</span>
          <div>
            <strong>Call Us</strong>
            <p>+91 1234567890</p>
          </div>
        </div>

        <div className="info-block">
          <span className="icon">✉️</span>
          <div>
            <strong>Email Us</strong>
            <p>info@thedevschool.com</p>
          </div>
        </div>

        <div className="info-block">
          <span className="icon">⏰</span>
          <div>
            <strong>Working Hours</strong>
            <p>Monday - Saturday: 9AM - 7PM</p>
          </div>
        </div>
      </div>

      <div className="get-in-touch-form">
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Your email" />

          <label>Phone Number</label>
          <input type="text" placeholder="Your phone number" />

          <label>Your Message</label>
          <textarea placeholder="How can we help you?"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
     <section className="career-hero">
      <div className="career-hero-content">
        <div className="icon-badge">🏅</div>
        <h1>
          Your Career Transformation <br />
          <span>Starts Here</span>
        </h1>
        <p>
          Join over 15,000 graduates who have launched successful careers in
          tech with our <br />
          industry-recognized training programs.
        </p>

        <div className="career-stats">
          <div className="stat">
            <h2>10+</h2>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className="stat">
            <h2>15K+</h2>
            <p>STUDENTS TRAINED</p>
          </div>
          <div className="stat">
            <h2>500+</h2>
            <p>PARTNER COMPANIES</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p>EXPERT MENTORS</p>
          </div>
        </div>

        <div className="career-hero-buttons">
          <button className="primary-btn">
            Explore Programs <i class="fa-brands fa-searchengin"></i>
          </button>
          <button className="secondary-btn">
            Schedule Consultation <i class="fa-solid fa-calendar"></i>
          </button>
        </div>
      </div>
    </section>
    {/* footer */}
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col footer__brand">
          <div className="brand__name">
            <span className="brand__logo">🎓</span>
            TheDev&nbsp;School
          </div>
          <p className="brand__tagline">
            Empowering careers through quality education and industry‑focused
            training for over a decade.
          </p>

          <div className="brand__socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* quick links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Courses</Link>
            </li>
            <li>
              <Link to="/courses">Placements</Link>
            </li>
            <li>
              <Link to="/placements">Batches</Link>
            </li>
            <li>
              <Link to="/blogs">Aboutus</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* courses */}
        <div className="footer__col">
          <h4 className="footer__heading">Courses</h4>
          <ul className="footer__list">
            <li>Data Science</li>
            <li>FullStack Development</li>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence</li>
            <li>DevOps</li>
            <li>
              <Link to="/courses">View All Courses</Link>
            </li>
          </ul>
        </div>

        {/* newsletter */}
        <div className="footer__col">
          <h4 className="footer__heading">Newsletter</h4>
          <p className="newsletter__text">
            Subscribe to our newsletter for the latest updates and offers.
          </p>

          <form
            className="newsletter__form"
            onSubmit={(e) => {
              e.preventDefault();
              /* handle submit */
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email"
            />
            <button type="submit" aria-label="Subscribe">
              <FaPaperPlane />
            </button>
          </form>

          <small className="newsletter__legal">
            By subscribing, you agree to our&nbsp;
            <Link to="/privacy">Privacy Policy</Link> and consent to receive
            updates.
          </small>
        </div>
      </div>

    
    </footer>
    </>
  );
};

export default HeroSection;
