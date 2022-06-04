import React from "react";
import Project from "../Project/Project";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <Project></Project>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
