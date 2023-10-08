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
const MainContent = (props) => {
  const { data } = props;

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
        {data.map((cards) => {
          return (
            <div className="card">
              <div className="card-header">
                <div className="card-header-left">
                  <p>rz/{cards.sub}</p>
                  <span> {cards.post_date}</span>
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
                    <p>{cards.post_title}</p>
                  </div>
                  <div className="card-left-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        icon={faUpLong}
                      />
                      <p>{cards.upvotes}</p>
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        icon={faDownLong}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-btn-icon"
                        icon={faMessage}
                      />
                      <p>{cards.comments}</p>
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
                  <img src={`${cards.images}`} alt="cat image" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MainContent;
