import React, { useState, useEffect } from "react";
import "./Side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowUpWideShort,
  faGamepad,
  faBaseball,
  faChartLine,
  faCoins,
  faTv,
  faStar,
  faRobot,
  faBullhorn,
  faCircleQuestion,
  faBookOpen,
  faWrench,
  faMicrophone,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
const Side = () => {
  const [topics, setTopics] = useState(false);
  const [resources, setResources] = useState(false);

  const handleTopic = () => {
    setTopics(!topics);
  };

  const handleRecourses = () => {
    setResources(!resources);
  };
  return (
    <div className="side-bar">
      <div className="side-home">
        <div className="active-home">
          <FontAwesomeIcon icon={faHome} />
          <h4>Home</h4>
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowUpWideShort} />
          <h4>Popular</h4>
        </div>
      </div>
      <div className="side-topic">
        <div className="topic" onClick={handleTopic}>
          <h4>TOPICS</h4>
          <FontAwesomeIcon
            id="angle-icon"
            className={topics ? "angleUp" : "angleDown"}
            icon={topics ? faAngleDown : faAngleDown}
          />
        </div>
        {topics && (
          <div className="topic-list">
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faGamepad} />
                  Gaming
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBaseball} />
                  Sports
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faChartLine} />
                  Business
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faCoins} />
                  Crypto
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faTv} />
                  Television
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faStar} />
                  Celebrity
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="side-topic">
        <div className="topic" onClick={handleRecourses}>
          <h4>RESOURCES</h4>
          <FontAwesomeIcon
            id="angle-icon"
            className={resources ? "angleUp" : "angleDown"}
            icon={resources ? faAngleDown : faAngleDown}
          />
        </div>
        {resources && (
          <div className="topic-list">
            <div>
              <ul>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faRobot} />
                  About Radditz
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBullhorn} />
                  Advertise
                </li>
                <li>
                  <FontAwesomeIcon
                    className="topic-icon"
                    icon={faCircleQuestion}
                  />
                  Help
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faBookOpen} />
                  Blog
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faWrench} />
                  Careers
                </li>
                <li>
                  <FontAwesomeIcon className="topic-icon" icon={faMicrophone} />
                  Press
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="policy">
        <p>Radditz, Inc. @ 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Side;
