import React from "react";
import "./hexcomp.css"; // Ensure you have the CSS file for styling
export default function HexComponent() {
  return (
    <>
      <div id="hexGrid">
        <div class="hexCrop">
          <div class="hexGrid">
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
          </div>
        </div>
      </div>
    </>
  );
}
