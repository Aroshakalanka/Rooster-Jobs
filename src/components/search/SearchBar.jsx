import React from "react";
import "./searchbar.css";

import SearchIcon from "../../assets/icons/SearchIcon.svg";
import LocationIcon from "../../assets/icons/LocationIcon.svg";

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-inputContainer">
        <div className="search-keyword">
          <div className="s-icon-container">
            <img src={SearchIcon} alt="Search Icon" className="s-icon" />
          </div>

          <input
            type="text"
            name="keywords"
            id="keywords"
            placeholder="Job title or keywords"
            className="search-input"
          />
        </div>

        <div className="search-location">
          <div className="s-icon-container">
            <img src={LocationIcon} alt="Location Icon" className="s-icon" />
          </div>

          <input
            type="text"
            name="location"
            id="location"
            placeholder="Anywhere"
            className="search-input"
          />
        </div>
      </div>

      <div className="search-btn">
        <div>Search</div>
      </div>
    </div>
  );
}

export default SearchBar;
