import React from "react";
import Side from "../components/Side/Side";
import "./Home.css";
import MainContent from "../components/MainContent/MainContent";

const Home = () => {
  return (
    <div className="home">
      <Side />
      <MainContent />
    </div>
  );
};

export default Home;
