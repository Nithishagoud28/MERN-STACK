
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import Placements from "./Pages/Placements";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Batches from './Pages/Batches';
import LoginForm from "./Credentials-Components/LoginForm"
import RegisterForm from './Credentials-Components/RegisterForm';
import Enrollpage from "./Pages/Enrollpage";
import Payment from     "./Pages/Payment"
import Consultation from './Pages/Consultation';
import PopularCourse from './Components/Courses/PopularCourse';

function App() {
  return (
    
      <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path= "/courses" element= { <Courses/>} />
        <Route path="/placements" element={<Placements />} />
        < Route path="/batches" element ={< Batches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Loginform" element={<LoginForm />} /> */}
        {/* <Route path="/RegisterForm" element={<RegisterForm />} /> */}
         <Route path="/enroll/:id" element={<Enrollpage />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/consultation" element={<Consultation />} />
         <Route path="/popularcourse" element={<PopularCourse />} />
        
      </Routes>
       </div>
  
      
  );
}

export default App;
