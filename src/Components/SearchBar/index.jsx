import React from "react";
import "./index.css";

export default function SearchBar(props) {
  return (
    <div className="Search-Container">
      <div className="Search-SearchBar">
        <input 
          type="text" 
          placeholder="Search The Archives" 
          value={props.query}
          onChange={(e) => {
             props.setQuery(e.target.value)
             props.setFilteredData(e.target.value)
            }}
        />
      </div>
      <div className="Search-Dropdown">Dropdown List</div>
    </div>
  );
}
