import React from "react";
import "./checkboxitem.css";

function CheckboxItem({ name, count }) {
  return (
    <div className="f-checkbox-item">
      <div>
        <input
          type="checkbox"
          name="fulltime"
          id="fulltime"
          className="checkbox"
        />
        <div className="checkbox-itemName">{name}</div>
      </div>
      <div className="checkbox-itemCount">{count}</div>
    </div>
  );
}

export default CheckboxItem;
