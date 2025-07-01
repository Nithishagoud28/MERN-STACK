import React from "react";
import "./Placements.css";
import Footer from "./Footer/Footer"

const stats = [
  { icon: "🎖️", value: "98%", label: "Placement Rate" },
  { icon: "🎓", value: "15,000+", label: "Students Placed" },
  { icon: "💰", value: "12 LPA", label: "Average Salary" },
  { icon: "🏆", value: "42 LPA", label: "Highest Package" },
];
const students = [
  {
    name: "Ada Morgan",
    title: "Data Scientist",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "EduMentor's Data Science program completely transformed my career. Within 2 months of completing the program, I landed my dream job at Microsoft.",
    rating: 5,
    ctc: "18 LPA",
    batch: "2022",
  },
  {
    name: "Jhon Carter",
    title: "Full Stack Developer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "After completing the Full Stack program, I received multiple job offers. The hands-on projects and mentorship were invaluable in my journey.",
    rating: 5,
    ctc: "22 LPA",
    batch: "2022",
  },
  {
    name: "Ana James",
    title: "Cloud Architect",
    company: "Amazon Web Services",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "The Cloud Computing course was comprehensive and up-to-date with industry standards. I was able to transition from a support role to a Cloud Architect.",
    rating: 4.5,
    ctc: "25 LPA",
    batch: "2021",
  },
  {
    name: "Robert Jr",
    title: "Software Engineer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "I had tried various online courses, but nothing compared to the structured learning at EduMentor. The career services team helped me prepare for interviews.",
    rating: 5,
    ctc: "20 LPA",
    batch: "2021",
  },
  {
    name: "Natasha Erown",
    title: "Data Analyst",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "EduMentor's hands-on approach to learning made all the difference in my career transition. The projects were relevant to industry needs.",
    rating: 4.5,
    ctc: "16 LPA",
    batch: "2022",
  },
  {
    name: "David Lee",
    title: "Frontend Developer",
    company: "Netflix",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "The curriculum at EduMentor was comprehensive and up-to-date with the latest industry trends. It fostered creativity and problem-solving skills.",
    rating: 5,
    ctc: "19 LPA",
    batch: "2022",
  },
];

const Placements = () => {
  return (
    <>
      <div className="placements-container">
        <section className="hero">
          <h1>Our Placements</h1>
          <p>
            Discover how Digital Learning connects students with top companies
            and helps them launch successful careers.
          </p>
        </section>
        <section className="stats-section">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{item.icon}</div>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </section>
      </div>
      <div>
        <section className="partners-section">
          <div className="content">
            <h2 className="title">Our Hiring Partners</h2>
            <p className="subtitle">
              We've partnered with leading companies across industries to help
              our students land their dream jobs.
            </p>

            <div className="logo-row">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                alt="Microsoft"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt="Google"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                alt="AWS"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg"
                alt="Accenture"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png"
                alt="Wipro"
              />
            </div>

            <div className="logo-row">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png"
                alt="TCS"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png"
                alt="Infosys"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/2560px-Cognizant_logo_2022.svg.png"
                alt="Cognizant"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png"
                alt="Adobe"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"
                alt="Salesforce"
              />
              <img
                src="https://companieslogo.com/img/orig/HCLTECH.NS-a301c3b4.png?t=1723784865"
                alt="HCL"
              />
            </div>
          </div>
        </section>
        {/* SUCCESS STORIES */}
        <section className="success-stories">
          <h2 className="title">Success Stories</h2>
          <p className="subtitle">
            Meet our successful alumni who transformed their careers after
            training with us.
          </p>

          <div className="testimonials">
            {students.map((student, index) => (
              <div className="testimonial-card" key={index}>
                <div className="user-info">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="user-img"
                  />
                  <div>
                    <h3>{student.name}</h3>
                    <p className="role-company">
                      {student.title}{" "}
                      <span className="company">@ {student.company}</span>
                    </p>
                  </div>
                </div>
                <p className="quote">"{student.quote}"</p>
                <div className="testimonial-footer">
                  <div className="stars">
                    {"★".repeat(Math.floor(student.rating))}
                    {student.rating % 1 !== 0 ? "☆" : ""}
                  </div>
                  <div className="extra-info">
                    CTC: {student.ctc} &nbsp; | &nbsp; Batch: {student.batch}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="placement-process">
  <h2 className="section-title">Our Placement Process</h2>
  <p className="section-subtitle">
    We follow a structured placement process to ensure our students are fully prepared for their career journey.
  </p>

  <div className="timeline">
    <div className="timeline-item left">
      <div className="content">
        <h3>Career Counseling</h3>
        <p>One-on-one sessions with career advisors to identify strengths, interests, and career goals.</p>
      </div>
      <div className="icon"><i className="fas fa-user-tie"></i></div>
    </div>

    <div className="timeline-item right">
      <div className="icon"><i className="fas fa-laptop-code"></i></div>
      <div className="content">
        <h3>Technical Training</h3>
        <p>Rigorous skill development with hands-on projects and real-world applications.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="content">
        <h3>Soft Skills Development</h3>
        <p>Communication, teamwork, and interpersonal skills training to excel in professional environments.</p>
      </div>
      <div className="icon"><i className="fas fa-comments"></i></div>
    </div>

    <div className="timeline-item right">
      <div className="icon"><i className="fas fa-file-alt"></i></div>
      <div className="content">
        <h3>Resume Building</h3>
        <p>Crafting compelling resumes that highlight strengths and align with employer expectations.</p>
      </div>
    </div>
    <div className="timeline-item left">
  <div className="content">
    <h3>Mock Interviews</h3>
    <p>Practice interviews with industry experts to prepare for real-world interview scenarios.</p>
  </div>
  <div className="icon"><i className="fas fa-users"></i></div>
</div>

<div className="timeline-item right">
  <div className="icon"><i className="fas fa-handshake"></i></div>
  <div className="content">
    <h3>Placement Assistance</h3>
    <p>Company referrals, job application support, and interview coordination with partner companies.</p>
  </div>
</div>
  </div>
</section>
<section className="cta-section">
      <h2 className="cta-title">Ready to Launch Your Tech Career?</h2>
      <p className="cta-subtitle">
        Join thousands of successful graduates who have transformed their careers with our industry-focused training and placement support.
      </p>
      <div className="cta-buttons">
        <button className="btn btn-white">Explore Courses</button>
        <button className="btn btn-orange">Apply Now</button>
      </div>
    </section>
    <Footer />

      </div>
    </>
  );
};

export default Placements;
