import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faAngleDown,
  faCircle,
  faC,
} from "@fortawesome/free-solid-svg-icons";
const MainContent = () => {
  return (
    <main>
      <div className="main-header">
        <div className="main-header-btn">
          <button>Create a post</button>
        </div>
        <div>
          <div className="main-header-icons">
            <FontAwesomeIcon icon={faChartBar} />
            <FontAwesomeIcon id="main-header-icon-two" icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-header">
            <div className="card-header-left">
              <p>rz/PhotoshopRequest</p>
            </div>
            <div className="card-header-right">
              <button>Join</button>
              <div className="circle-div">
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <FontAwesomeIcon className="circle" icon={faCircle} />
                <FontAwesomeIcon className="circle" icon={faCircle} />
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-left"></div>
            <div className="card-right-img"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
