import React from "react";
import "./index.css";

export default function InfoCard(props) {
  return (
    <div className="InfoCard-Container">
      <div>
        <img
          className="InfoCard-Image"
          src={props.pic}
          alt={props.altDescription}
        />
      </div>
      <div className="InfoCard-Name">
        <h1>{props.name}</h1>
        <h3>{props.ranking}</h3>
      </div>
      <div className="InfoCard-Description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
