import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faEllipsis,
  faRobot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false);

  const handleFocus = () => {
    setSearchIcon(true);
  };

  const handleBlur = () => {
    setSearchIcon(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-title">
          <FontAwesomeIcon id="robot" icon={faRobot} />
          <h3>Radditz</h3>
        </div>
        <div className="nav-search">
          {searchIcon ? (
            ""
          ) : (
            <FontAwesomeIcon id="search-mag" icon={faMagnifyingGlass} />
          )}
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
            placeholder="Search Radditz"
          />
        </div>
        <div className="nav-buttons">
          <div>
            <FontAwesomeIcon id="getap" icon={faQrcode} />
            <button>Get app</button>
          </div>
          <div>
            <button>Log In</button>
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
