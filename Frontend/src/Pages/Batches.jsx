import React, { useState } from 'react';
import './Batches.css';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

const Batches = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Weekday', 'Weekend'];
const batchData = [
  {
    course: 'Data Science Masterclass',
    startDate: 'June 15, 2023',
    schedule: '6:30 PM – 8:30 PM (IST)\nMon, Wed, Fri',
    duration: '12 Weeks',
    mode: 'Online',
    seatsLeft: 8,
    totalSeats: 30,
  },
  {
    course: 'Full Stack Web Development',
    startDate: 'June 18, 2023',
    schedule: '10:00 AM – 1:00 PM (IST)\nSat, Sun',
    duration: '16 Weeks',
    mode: 'Online',
    seatsLeft: 4,
    totalSeats: 25,
  },
  {
    course: 'Cloud Computing & DevOps',
    startDate: 'June 20, 2023',
    schedule: '7:00 PM – 9:00 PM (IST)\nTue, Thu',
    duration: '10 Weeks',
    mode: 'Hybrid',
    seatsLeft: 12,
    totalSeats: 20,
  },
  {
    course: 'Machine Learning Engineer',
    startDate: 'June 25, 2023',
    schedule: '11:00 AM – 2:00 PM (IST)\nSat, Sun',
    duration: '14 Weeks',
    mode: 'Online',
    seatsLeft: 7,
    totalSeats: 25,
  },
  {
    course: 'UI/UX Design Bootcamp',
    startDate: 'July 3, 2023',
    schedule: '6:00 PM – 8:00 PM (IST)\nMon, Wed, Fri',
    duration: '8 Weeks',
    mode: 'Online',
    seatsLeft: 9,
    totalSeats: 20,
  },
  {
    course: 'Mobile App Development',
    startDate: 'July 8, 2023',
    schedule: '10:30 AM – 1:30 PM (IST)\nSat, Sun',
    duration: '12 Weeks',
    mode: 'Hybrid',
    seatsLeft: 11,
    totalSeats: 25,
  },
  {
    course: 'Cybersecurity Specialist',
    startDate: 'July 10, 2023',
    schedule: '7:00 PM – 9:00 PM (IST)\nMon, Wed, Fri',
    duration: '14 Weeks',
    mode: 'Online',
    seatsLeft: 15,
    totalSeats: 20,
  },
  {
    course: 'Digital Marketing Mastery',
    startDate: 'July 15, 2023',
    schedule: '11:00 AM – 2:00 PM (IST)\nSat, Sun',
    duration: '10 Weeks',
    mode: 'Online',
    seatsLeft: 18,
    totalSeats: 30,
  },
];
const faqs = [
  {
    question: "Can I switch batches after enrollment?",
    answer:
      "Yes, you can switch to another batch of the same course within the first week of classes, subject to seat availability. Please contact our student services team for assistance.",
  },
  {
    question: "What happens if I miss a class?",
    answer:
      "All classes are recorded and available for enrolled students. You can access the recordings and catch up on missed content at your convenience.",
  },
  {
    question: "What is the difference between online and hybrid mode?",
    answer:
      "Online batches are conducted 100% virtually, while hybrid batches include some in-person sessions at our campus for hands-on workshops and networking opportunities.",
  },
  {
    question: "Is there a payment plan available?",
    answer:
      "Yes, we offer flexible payment plans and EMI options. You can pay the course fee in 3 or 6 installments. Contact our admissions team for more details.",
  },
];

  return (
    <>
   <section className="upcoming-batches">
      <h2 className="heading">Upcoming Batches</h2>
      <p className="subheading">
        Find the perfect batch schedule that fits your availability and start your learning journey.
      </p>
    </section>
    <section>
       <div className="filter-wrapper">
      <div className="batch-filter">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter} Batches
          </button>
        ))}
      </div>
    </div>
    </section>
    <section>
      <div className="batch-table-container">
      <table className="batch-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Start Date</th>
            <th>Schedule</th>
            <th>Duration</th>
            <th>Mode</th>
            <th>Seats Left</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {batchData.map((batch, index) => {
            const percent = (batch.seatsLeft / batch.totalSeats) * 100;
            const progressColor =
              percent <= 20 ? 'red' : percent <= 50 ? 'orange' : 'green';

            return (
              <tr key={index}>
                <td>{batch.course}</td>
                <td>{batch.startDate}</td>
                <td>
                  <strong>{batch.schedule.split('\n')[0]}</strong>
                  <br />
                  <span>{batch.schedule.split('\n')[1]}</span>
                </td>
                <td>{batch.duration}</td>
                <td>
                  <span className={`mode ${batch.mode.toLowerCase()}`}>
                    {batch.mode}
                  </span>
                </td>
                <td>
                  <div className="seats-info">
                    {batch.seatsLeft} / {batch.totalSeats}
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%`, backgroundColor: progressColor }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <button className="enroll-btn">Enroll Now</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </section>
    <section>
       <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Find answers to common questions about our batch schedules and enrollment process.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
    </section>
    <section>
      <section className="batch-help">
      <h2 className="batch-help-heading">Need Help Choosing the Right Batch?</h2>
      <p className="batch-help-text">
        Our education counselors can help you find the perfect learning schedule that fits your
        availability and learning goals.
      </p>
      <Link to="/consultation">
        <button className="consult-btn">
          Schedule a Free Consultation 
        </button>
      </Link>
    </section>
    </section>
    <Footer />
    </>
    
  );
};

export default Batches;

