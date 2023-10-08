import React from "react";
import Side from "../components/Side/Side";
import "./Home.css";
import MainContent from "../components/MainContent/MainContent";
import Popular from "../components/Popular/Popular";

const Home = (props) => {
  const { data } = props;
  return (
    <div className="home">
      <Side />
      <MainContent data={data} />
      <Popular data={data} />
    </div>
  );
};

export default Home;
