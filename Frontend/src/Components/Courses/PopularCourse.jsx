import React from "react";
import { useNavigate } from "react-router-dom";
import "./PopularCourse.css";

const courses = [
  {
    title: "Data Science Masterclass",
    duration: "12 Weeks",
    price: "$499",
    rating: "4.9",
    reviews: 245,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Master data science with Python, machine learning, and real-world projects to secure high-paying jobs.",
  },
  {
    title: "Full Stack Web Development",
    duration: "16 Weeks",
    price: "$599",
    rating: "4.8",
    reviews: 189,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Become a complete web developer with modern JavaScript, React, Node.js, and MongoDB.",
  },
  {
    title: "Cloud Computing & DevOps",
    duration: "10 Weeks",
    price: "$549",
    rating: "4.7",
    reviews: 132,
    badge: "New",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Learn AWS, Azure, Docker, and Kubernetes to become a highly-paid cloud engineer.",
  },
];

const PopularCourse = () => {
  const navigate = useNavigate();

  return (
    <section className="popular-courses">
      <div className="courses-header">
        <h2>Our Popular Courses</h2>
        <p>
          Discover our most in-demand courses designed to help you master the
          skills employers are looking for.
        </p>
        <button className="view-all-btn" onClick={() => navigate("/courses")}>
          View All Courses
        </button>
      </div>

   <div className="course-cards">
  {courses.map((course, index) => (
    <div className="course-card" key={index}>
      <div className="card-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="card-body">
        <p className="duration">{course.duration}</p>
        <div className="rating">
          <span>⭐ {course.rating}</span> ({course.reviews})
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="card-footer">
          <span className="price">{course.price}</span>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default PopularCourse;
