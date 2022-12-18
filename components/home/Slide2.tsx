import React from "react";
import { useState, useEffect } from "react";

const Slide2 = () => {
  const [type, setType] = useState("");
  const initialText = `After a few months, I’m being confident to build a static website.
    And my first website is this`;
  const initialTextArr = initialText.split("");

  function loopThroughSplittedText() {
    for (let i = 0; i < initialTextArr.length; i++) {
      // for each iteration, print each word
      // and make a pause after it
      (function (i) {
        setTimeout(function () {
          setType((prev) => (prev += initialTextArr[i]));
        }, 50 * i);
      })(i);
    }
  }

  useEffect(loopThroughSplittedText, []);
  return (
    <div
      id="item1"
      className="carousel-item w-full h-full flex justify-center items-center gap-12"
    >
      <p className="max-w-xs md:max-w-md">{type}</p>
    </div>
  );
};

export default Slide2;
