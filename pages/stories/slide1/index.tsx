import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";
import MainLayout from "../../../layout/MainLayout";
import HomeLayout from "../../../layout/StoriesLayout";
import styles from "./Slide1.module.css";
import { useState, useEffect } from "react";

const Slide1: NextPageWithLayout = () => {
  const [xcors, setXcors] = useState();
  const [ycors, setYcors] = useState();
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
        }, 40 * i);
      })(i);
    }
  }

  useEffect(loopThroughSplittedText, []);

  function imageClipMove(e: any) {
    const { clientX, clientY } = e;
    setXcors(clientX);
    setYcors(clientY);
  }
  return (
    <div
      onMouseMove={imageClipMove}
      id="item1"
      className="carousel-item w-screen h-screen flex justify-center items-center gap-12"
      style={{ left: xcors, top: ycors }}
    >
      {/* <div id="bg" className="relative">
        <Image
          src={website}
          alt="website"
          className={`${styles.imageClip} left-60`}
        />
      </div> */}
      <p className="max-w-xs md:max-w-md">
        <span className={styles.letter}>{type}</span>
      </p>
    </div>
  );
};

Slide1.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  );
};

export default Slide1;
