import React from "react";
import About from "../../Components/Home/About/About";
import NewService from "../../Components/Home/Services/Services";
import GallerySwiper from "../../Components/Home/Gallery/swiper";
import Companies from "../../Components/Home/CompanyLogo/Companies";
import Form from "../../Components/Home/Contact/Form";
import Footer from "../../Components/Home/Footer/Footer";
import Hero from "../../Components/Home/Hero/Hero";
import Review from "../../Components/Home/Review/Review";
import Navbar from "../../Components/Home/Navbar/Navbar";
import MidSection from "../../Components/Home/Mid/MidSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Companies />
      <NewService />
      <GallerySwiper />
      <MidSection />
      <Review />
      <Form />
      <Footer />
    </div>
  );
};

export default HomePage;
