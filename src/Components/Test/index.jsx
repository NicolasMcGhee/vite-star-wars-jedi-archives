import React from "react";
import './index.css'

export default function Test(props) {
  return (
    <div>
      <h2>Image Gallery With Horizontal Scroll</h2>
      <p>Use the horizontal scrollbar to see the other images.</p>
      <section class="scroll-container">
        <img src={props.Anakin} alt="Cinque Terre" width="600" height="400" />
        <img src={props.Mace} alt="Forest" width="600" height="400" />
        <img src={props.Yoda} alt="Northern Lights" width="600" height="400" />
      </section>
    </div>
  );
}
