import React, { useEffect, useState } from "react";
import Side from "../components/Side/Side";
import "./Home.css";
import MainContent from "../components/MainContent/MainContent";
import Popular from "../components/Popular/Popular";
import Post from "./Post";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Home = (props) => {
  const [postView, setPostView] = useState(false);
  const { data, toggleLoginModal } = props;
  const location = useLocation();

  const postViewHandler = () => {
    setPostView(true);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setPostView(false);
    }
  }, [location]);

  return (
    <div className="home">
      <Side />

      {postView ? null : (
        <MainContent data={data} toggleLoginModal={toggleLoginModal} />
      )}

      <Routes>
        <Route
          path="/post/:post_id"
          element={
            <Post
              postViewHandler={postViewHandler}
              toggleLoginModal={toggleLoginModal}
            />
          }
        />
      </Routes>
      <Popular data={data} />
    </div>
  );
};

export default Home;
