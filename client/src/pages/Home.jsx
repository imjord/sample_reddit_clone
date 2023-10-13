import React, { useEffect, useState } from "react";
import Side from "../components/Side/Side";
import "./Home.css";
import MainContent from "../components/MainContent/MainContent";
import Popular from "../components/Popular/Popular";
import Post from "./Post";
import { Routes, Route, useParams } from "react-router-dom";

const Home = (props) => {
  const [postView, setPostView] = useState(false);
  const { data, toggleLoginModal } = props;

  const postViewHandler = () => {
    setPostView(true);
  };

  useEffect(() => {
    setPostView(false);
  }, []);

  return (
    <div className="home">
      <Side />

      {postView ? (
        <h3>Post still true </h3>
      ) : (
        <MainContent data={data} toggleLoginModal={toggleLoginModal} />
      )}

      <Routes>
        <Route
          path="/post/:post_id"
          element={<Post postViewHandler={postViewHandler} />}
        />
      </Routes>
      <Popular data={data} />
    </div>
  );
};

export default Home;
