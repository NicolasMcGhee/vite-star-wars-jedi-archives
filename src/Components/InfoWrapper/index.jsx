import React, { Children } from "react";
import "./index.css";

export default function InfoWrapper(props) {
  return (
    <div className="Infowrapper-Container">
      <div className="Infowrapper-CardContainer">{props.children}</div>
    </div>
  );
}
