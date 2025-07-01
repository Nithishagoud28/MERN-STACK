import React from 'react'
import "./About.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer/Footer';


const About = () => {
  return (
    <>
    <div className="banner">
      <h1>About The Digital Learning</h1>
      <p>
        We're on a mission to transform careers through quality education and
        industry-focused training that bridges the gap between academic learning
        and real-world job requirements.
      </p>
    </div>
    <section>
        <div className="about-section">
      <div className="about-text">
        <h2>Our Story</h2>
        <p>
          The Digital Learning was founded in 2013 by Dr. Aditya Sharma, a former Google Tech Lead who
          recognized the gap between university education and industry requirements. What started
          as a small training center with just two courses has now grown into a leading tech
          education institute.
        </p>
        <p>
          Over the years, we've helped thousands of students transform their careers through our
          industry-aligned curriculum, hands-on projects, and robust placement support. Our success
          is measured by the success of our students, many of whom now work at top technology
          companies worldwide.
        </p>
        <p>
          Today, The Digital Learning offers over 20 specialized courses across various tech domains,
          taught by experienced industry professionals who bring real-world insights into the
          classroom. We continue to evolve our teaching methodologies and course content to stay
          ahead of industry trends.
        </p>
      </div>

      <div className="about-image">
        <img
          src={("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")} // Replace with your actual image path
          alt="Team at work"
        />
        <div className="badge">Established 2013</div>
      </div>
    </div>
    </section>
    <section>
       <div className="stats-section">
        <div className="stat-box">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-box">
          <h3>15K+</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-box">
          <h3>500+</h3>
          <p>Partner Companies</p>
        </div>
        <div className="stat-box">
          <h3>98%</h3>
          <p>Placement Rate</p>
        </div>
      </div>
    </section>
    <section>
            <div className="mission-vision-section">
        <h2>Our Mission & Vision</h2>
        <div className="mission-vision-cards">
          <div className="card">
            <span className="icon">🏳️</span>
            <h3>Our Mission</h3>
            <p>
              To empower individuals with the skills, knowledge, and mindset needed to excel in the technology industry through practical, industry-relevant education and personalized career support.
            </p>
          </div>
          <div className="card">
            <span className="icon">👁️</span>
            <h3>Our Vision</h3>
            <p>
              To be the world's most trusted technology education platform that transforms lives by bridging the gap between education and employment, creating a skilled global workforce ready for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
            <div className="leadership-section">
        <h2>Our Leadership Team</h2>
        <p className="subtext">
          Meet the experienced professionals who guide our vision and ensure we deliver excellence in everything we do.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. John Doe" />
            <h3>Dr. John Doe</h3>
            <p className="role">Founder & CEO</p>
            <p>Former Google Tech Lead with 15+ years of industry experience. PhD in Computer Science from Stanford University.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Theo Clarke" />
            <h3>Theo Clarke</h3>
            <p className="role">Director of Education</p>
            <p>Ex-Microsoft Learning Specialist with expertise in curriculum development and educational technology.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Kai Morgan" />
            <h3>Kai Morgan</h3>
            <p className="role">Head of Placements</p>
            <p>Tech recruitment expert with extensive connections across the industry. Previously at LinkedIn.</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Rhea Stone" />
            <h3>Rhea Stone</h3>
            <p className="role">Lead Data Science Instructor</p>
            <p>Data scientist with experience at Amazon and IBM. Author of "Python for Data Science" and industry speaker.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
     
              <div className="core-values-section">
        <h2>Our Core Values</h2>
        <p className="subtext">These principles guide everything we do at EduMentor.</p>
        <div className="values-grid">
          <div className="value-card">
            <div className="icon">⭐</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in our curriculum, teaching methodology, and student support to ensure outstanding outcomes.</p>
          </div>
          <div className="value-card">
            <div className="icon">💡</div>
            <h3>Innovation</h3>
            <p>We continuously evolve our teaching methods and course content to stay ahead of industry trends and technological advancements.</p>
          </div>
          <div className="value-card">
            <div className="icon">👥</div>
            <h3>Student-Centric</h3>
            <p>We put our students' success at the center of everything we do, providing personalized support throughout their learning journey.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div className="join-section">
      <h2 className="join-title">
        Join the <span className="bold">The Digital Community</span>
      </h2>
      <p className="join-description">
        Take the first step towards a rewarding tech career with our industry-recognized training programs.
      </p>
      <div className="join-buttons">
        <button className="btn primary">Explore Programs</button>
        <button className="btn secondary">Get in Touch</button>
      </div>
    </div>
    </section>
   <Footer />
    </>
  )
}

export default About
