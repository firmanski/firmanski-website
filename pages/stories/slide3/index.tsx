import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";
import MainLayout from "../../../layout/MainLayout";
import HomeLayout from "../../../layout/StoriesLayout";
import styles from "./Slide3.module.css";
import { useState, useEffect } from "react";

const Slide3: NextPageWithLayout = () => {
  const [xcors, setXcors] = useState();
  const [ycors, setYcors] = useState();
  const [type, setType] = useState("");
  const initialText = `I know that’s so boring and not professional. I want a website
    that feels like a native app. Then I met react js.`;
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
      <p className="max-w-xs md:max-w-md">
        <span className={styles.letter}>{type}</span>
      </p>
    </div>
  );
};

Slide3.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  );
};

export default Slide3;
