import React from "react";
import { useState, useEffect } from "react";

const Slide1 = () => {
  const [type, setType] = useState("");
  const initialText =
    "It all started in 2020 when I need a portfolio website for my vector graphic works. I started learning HTML, and quickly after I got into CSS, at that point I was mind blown by it's power!";
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
      className="carousel-item w-full h-full flex justify-center items-center gap-12 "
    >
      <p className="max-w-xs md:max-w-md">{type}</p>
    </div>
  );
};

export default Slide1;
