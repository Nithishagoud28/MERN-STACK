import React from "react";
import { useNavigate } from "react-router-dom";
import "./popularcourses.css";

const courses = [
  {
    title: "Data Science Masterclass",
    duration: "12 Weeks",
    rating: 4.9,
    reviews: 245,
    price: "$499",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Stack Web Development",
    duration: "16 Weeks",
    rating: 4.8,
    reviews: 189,
    price: "$599",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing & DevOps",
    duration: "10 Weeks",
    rating: 4.7,
    reviews: 132,
    price: "$549",
    badge: "New",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const PopularCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="popular-courses">
      <div className="header">
        <div>
          <h2>Our Popular Courses</h2>
          <p>
            Discover our most in-demand courses designed to help you master the
            skills employers are looking for.
          </p>
        </div>
        <button className="view-all-button" onClick={() => navigate("./Courses")}>View All Courses</button>
      </div>

      <div className="course-list">
        {courses.map((course, idx) => (
          <div key={idx} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-info">
              <small>{course.duration}</small>
              <h3>{course.title}</h3>
              <p>
                {course.title.includes("Data Science") &&
                  "Master data science with Python, machine learning, and real-world projects to secure high-paying jobs."}
                {course.title.includes("Web Development") &&
                  "Become a complete web developer with modern JavaScript, React, Node.js, and MongoDB."}
                {course.title.includes("DevOps") &&
                  "Learn AWS, Azure, Docker, and Kubernetes to become a highly-paid cloud engineer."}
              </p>
              <div className="course-meta">
                <span>
                  ⭐ {course.rating} ({course.reviews})
                </span>
                <strong>{course.price}</strong>
              </div>
              <button>Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
