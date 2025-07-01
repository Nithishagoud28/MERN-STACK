import React, { useState, useEffect } from "react";
import "./Courses.css";
import Footer from "./Footer/Footer"
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => {
        if (!res.ok) throw new Error("❌ Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Fetched courses:", data);
        setCourses(data);
      })
      .catch((err) => {
        console.error("❌ Fetch failed:", err.message);
        console.error("Full error:", err);
      });
  }, []);

  // ✅ Filter by category (robust comparison)
  const filteredCourses =
    activeCategory === "All Courses"
      ? courses
      : courses.filter(
          (course) =>
            course.category.trim().toLowerCase() ===
            activeCategory.trim().toLowerCase()
        );

  const categories = [
    "All Courses",
    "Data Science",
    "Web Development",
    "Cloud Computing",
    "Mobile Development",
    "Design",
    "Cybersecurity",
    "Marketing", // ✅ fixed category name
    "Blockchain",
  ];
  const handleBookConsultation = () => {
    // Implement consultation booking logic
    navigate("/consultation");
  };


  return (
    <>
      <section className="courses-section">
        <h2 className="courses-title">Our Courses</h2>
        <p className="courses-description">
          Explore our comprehensive range of courses designed to help you master
          in-demand skills and advance your career.
        </p>
      </section>

      <section>
        <div className="category-container">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="courses-container">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div className="course-card" key={course._id}>
                <div className="card-image">
                  <img src={course.imageUrl} alt={course.title} />
                  <span className={`badge ${course.tag.toLowerCase()}`}>
                    {course.tag}
                  </span>
                </div>
                <div className="card-content">
                  <p className="duration">{course.duration}</p>
                  <h3 className="title">{course.title}</h3>
                  <p className="description">{course.description}</p>
                  <div className="price-rating">
                    <span className="price">₹{course.price}</span>
                    <span className="rating">
                      <span className="star">★</span> {course.rating}
                    </span>
                  </div>
                  <button
                    className="enroll-btn"
                    onClick={() =>
                      navigate(`/enroll/${course._id}`, { state: { course } })
                    }
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ marginTop: "50px" }}>No courses found</p>
          )}
        </div>
      </section>
       <section className="consultation-banner">
      <div className="consultation-content">
        <h2>Not Sure Which Course Is Right For You?</h2>
        <p>
          Schedule a free consultation with our career advisors who will help you choose the perfect course based on your career goals.
        </p>
        <button className="consultation-button" onClick={handleBookConsultation}>
          Book a Free Consultation
        </button>
      </div>
    </section>
   <Footer />
     
    </>
  );
};

export default CoursesSection;
