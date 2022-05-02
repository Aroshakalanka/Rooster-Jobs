import React, { useState } from "react";
import "./App.css";

import Header from "./components/header/Header";
import JobCard from "./components/job/JobCard";
import Footer from "./components/footer/Footer";

import SearchBar from "./components/search/SearchBar";
import FiltersBar from "./components/filters/FiltersBar";

import { Jobs } from "./data";

function App() {
  const [showFilters, setshowFilters] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="body">
        <SearchBar />

        <div className="down-container">
          <div className="down-filters-show">
            <div>562 jobs recommended for you</div>
            {!showFilters && (
              <div onClick={() => setshowFilters(true)}>👓 Filters</div>
            )}
            {showFilters && (
              <div onClick={() => setshowFilters(false)}>🎃 Close</div>
            )}
          </div>

          {/* {showFilters && ( */}
          <div
            className={`d-filters-container ${!showFilters && "hideFilters"}`}
          >
            <FiltersBar />
          </div>
          {/* )} */}

          <div className="d-jobs-container">
            <div className="d-jobs-no">576 Jobs</div>

            <div className="jobcards-container">
              {Jobs.map((item) => (
                <JobCard
                  key={item.id}
                  company={item.company}
                  role={item.role}
                  img={item.profileImg}
                  isVerified={item.isverified}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
