import React from "react";
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
const ClassicView = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((cards) => {
        return (
          <div className="card" key={cards.sub}>
            <div className="card-header">
              <div className="card-header-left">
                <img className="sub-avatar" src={`${cards.sub_avatar}`} />
                <p className="sub-name">rz/{cards.sub}</p>
                <FontAwesomeIcon className="date-circle" icon={faCircle} />
                <span className="card-date"> {cards.post_date}</span>
                <FontAwesomeIcon className="date-circle" icon={faCircle} />
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
                      id="upvote"
                      icon={faUpLong}
                    />
                    <p>{cards.upvotes}</p>
                    <FontAwesomeIcon
                      className="card-btn-icon"
                      id="downvote"
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
  );
};

export default ClassicView;
