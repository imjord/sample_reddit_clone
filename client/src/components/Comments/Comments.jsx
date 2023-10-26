import React from "react";
import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faPlus,
 faCircle,
 faAngleDown,

 faUpLong,
 faDownLong,
 faMessage,
 faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Comments = () => {
  return <div className="comment-container">
    <div className="sort-comment">
        <p>Sort by: Best <FontAwesomeIcon icon={faAngleDown} /></p>
    </div>
    <div className="add-comment-btn">
      <button><span><FontAwesomeIcon id="comment-plus" icon={faPlus}/></span>Add a Comment</button>
    </div>
    <div className="comments">
      <div className="comment-user">
        
        <p>Username</p><span><FontAwesomeIcon id="circle" icon={faCircle}/>1 mo. ago</span>
      </div>
      <div className="comment-content">
      <p>What part of the app would you want to hand off to bun? Buns kind of a big toolbox</p>
      </div>
      <div className="comments-btns">
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        id="upvote"
                        icon={faUpLong}
                      />
                      <p>3000</p>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        id="downvote"
                        icon={faDownLong}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        icon={faMessage}
                      />
                      <p>comment</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="card-view-btn-icon"
                        icon={faArrowUpFromBracket}
                      />
                      <p>Share</p>
                    </div>
                  </div>
    </div>
  </div>;
};

export default Comments;
