import React, { useEffect, useState } from "react";
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
  faList,
  faRug,
} from "@fortawesome/free-solid-svg-icons";
import catImage from "../../assets/images/cat.jpg";
import ClassicView from "../ClassicView/ClassicView";
import CardView from "../CardView/CardView";
const MainContent = (props) => {
  const { data } = props;
  const [view, setView] = useState(false);
  const [activeView, setActiveView] = useState(false);
  const [classicView, setClassicView] = useState(true);
  const [cardView, setCardView] = useState(false);

  const setViewHandler = () => {
    setView(!view);
  };

  const classicViewLayout = () => {};

  const cardViewLayout = () => {
    setClassicView(false);
    setCardView(true);
  };

  useEffect(() => {});

  return (
    <main>
      <div className="main-header">
        <div className="main-header-btn">
          <button>Create a post</button>
        </div>
        <div>
          <div className="main-header-icons" onClick={setViewHandler}>
            <div className="tooltip">
              <FontAwesomeIcon icon={faChartBar} />
              {view ? (
                <span className="list-view">
                  <p>View</p>
                  <p className="card-view">
                    {" "}
                    <FontAwesomeIcon icon={faRug} className="view-icon" />
                    Card
                  </p>
                  <p
                    className={
                      classicView ? "classic-view-true" : "classic-view"
                    }
                  >
                    {" "}
                    <FontAwesomeIcon className="view-icon" icon={faList} />
                    Classic
                  </p>
                </span>
              ) : (
                <span class="tooltiptext">Change post view</span>
              )}
              <FontAwesomeIcon id="main-header-icon-two" icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="main-cards">
        {classicView ? <ClassicView data={data} /> : null}
        {cardView ? <CardView data={data} /> : null}
      </div>
    </main>
  );
};

export default MainContent;
