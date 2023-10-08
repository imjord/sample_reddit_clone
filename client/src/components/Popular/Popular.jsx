import React from "react";
import "./Popular.css";
const Popular = (props) => {
  const { data } = props;
  return (
    <div className="popular">
      <div className="popular-container">
        <div className="popular-header">
          <p>POPULAR COMMUNITIES</p>
        </div>
        {data.map((data) => {
          return (
            <div className="popular-list">
              <ul>
                <li>
                  <div>
                    <img src={`${data.sub_avatar}`} />
                  </div>
                  <div>
                    <p>r/{data.sub}</p>
                    <p>43,322,974 members</p>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
