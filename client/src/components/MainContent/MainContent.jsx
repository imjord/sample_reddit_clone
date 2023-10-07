import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faAngleDown,
  faCircle,
  faUpLong,
  faDownLong,
  faMessage,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import catImage from "../../assets/images/cat.jpg";
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
            <div className="card-left">
              <div className="card-left-text">
                <p>
                  Could someone remove the lower halkf of her body sp ot ;ppls
                  ;ole sje kist jas 2 frpmt ;egs? will tip $10 for my favorite,
                  thnaks
                </p>
              </div>
              <div className="card-left-btns">
                <div>
                  {" "}
                  <FontAwesomeIcon className="card-btn-icon" icon={faUpLong} />
                  <p>23</p>
                  <FontAwesomeIcon
                    className="card-btn-icon"
                    icon={faDownLong}
                  />
                </div>
                <div>
                  <FontAwesomeIcon className="card-btn-icon" icon={faMessage} />
                  <p>15</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="card-btn-icon"
                    icon={faArrowUpFromBracket}
                  />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="card-right-img">
              <img src={catImage} alt="cat image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
