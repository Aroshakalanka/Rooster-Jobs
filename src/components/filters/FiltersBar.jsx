import React from "react";
import { Countries, JobTypes, Modalities } from "../../data";
import CheckboxItem from "./CheckboxItem";
import "./filtersbar.css";

function FiltersBar() {
  return (
    <>
      <div className="d-filters-name">Skills</div>

      <div className="d-skills-input">
        <input type="text" name="skills" id="skills" />
      </div>

      <div className="d-s-hr" />

      <div className="d-filters-name">Job Type</div>
      {JobTypes.map((item) => (
        <CheckboxItem key={item.id} count={item.count} name={item.name} />
      ))}
      <div className="d-s-hr" />

      <div className="d-filters-name">Modality</div>
      {Modalities.map((item) => (
        <CheckboxItem key={item.id} count={item.count} name={item.name} />
      ))}
      <div className="d-s-hr" />

      <div className="d-filters-name">Country</div>
      {Countries.map((item) => (
        <CheckboxItem key={item.id} count={item.count} name={item.name} />
      ))}
      <div className="d-s-hr" />
    </>
  );
}

export default FiltersBar;
