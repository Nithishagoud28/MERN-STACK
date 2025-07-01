const mongoose = require('mongoose');
const Course = require('../Models/Course');

mongoose.connect("mongodb+srv://Nithishagoud:Nithisha%402803@cluster0.lfqldj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courses = [
  // Existing courses
  {
    title: "Data Science Masterclass",
    category: "Data Science",
    description: "Master data science with Python, machine learning, and real-world projects to secure high-paying jobs.",
    duration: "12 Weeks",
    price: 499,
    rating: 4.9,
    ratingCount: 245,
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Bestseller",
    tagColor: "orange",
  },
  {
    title: "Full Stack Web Development",
    category: "Web Development",
    description: "Become a complete web developer with modern JavaScript, React, Node.js, and MongoDB.",
    duration: "16 Weeks",
    price: 599,
    rating: 4.8,
    ratingCount: 189,
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
    tagColor: "orange",
  },
  {
    title: "Cloud Computing & DevOps",
    category: "Cloud Computing",
    description: "Learn AWS, Azure, Docker, and Kubernetes to become a highly-paid cloud engineer.",
    duration: "10 Weeks",
    price: 549,
    rating: 4.7,
    ratingCount: 132,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "New",
    tagColor: "green",
  },
  {
    title: "Machine Learning Engineer",
    category: "Data Science",
    description: "Master the mathematics and programming skills needed to build advanced machine learning models.",
    duration: "6 Weeks",
    price: 5649,
    rating: 4.8,
    ratingCount: 120,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Bestseller",
    tagColor: "orange",
  },
  {
    title: "UI/UX Design Bootcamp",
    category: "Design",
    description: "Learn to design beautiful, functional user interfaces and create seamless user experiences.",
    duration: "8 Weeks",
    price: 5449,
    rating: 4.9,
    ratingCount: 95,
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
    tagColor: "orange",
  },
  {
    title: "Mobile App Development",
    category: "Mobile Development",
    description: "Build cross-platform mobile apps using React Native for iOS and Android.",
    duration: "10 Weeks",
    price: 5549,
    rating: 4.7,
    ratingCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "New",
    tagColor: "green",
  },

  // New courses from the latest image
  {
    title: "Cybersecurity Specialist",
    category: "Cybersecurity",
    description: "Master the tools and techniques to protect systems from cyber threats and vulnerabilities.",
    duration: "14 Weeks",
    price: 649,
    rating: 4.8,
    ratingCount: 110,
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
    tagColor: "orange",
  },
  {
    title: "Digital Marketing Mastery",
    category: "Digital Marketing",
    description: "Learn SEO, SEM, social media marketing, and analytics to grow businesses online.",
    duration: "10 Weeks",
    price: 399,
    rating: 4.6,
    ratingCount: 95,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Bestseller",
    tagColor: "orange",
  },
  {
    title: "Blockchain Development",
    category: "Blockchain",
    description: "Build decentralized applications and smart contracts using Ethereum and Solidity.",
    duration: "12 Weeks",
    price: 599,
    rating: 4.7,
    ratingCount: 78,
    imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "New",
    tagColor: "green",
  }
];

async function seed() {
  try {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Courses seeded successfully!');
  } catch (err) {
    console.error('Error seeding courses:', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();