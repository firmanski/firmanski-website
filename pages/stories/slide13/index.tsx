import { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";
import MainLayout from "../../../layout/MainLayout";
import HomeLayout from "../../../layout/StoriesLayout";
import styles from "./Slide13.module.css";
import MainNavigation from "../../../components/navigations/MainNavigation";
import { useState, useEffect } from "react";
import SocialLinks from "../../../components/navigations/SocialLinks";

const Slide13: NextPageWithLayout = () => {
  const [xcors, setXcors] = useState();
  const [ycors, setYcors] = useState();
  const [type, setType] = useState("");
  const initialText = `Can I be a part of your amazing team?`;
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
      className="carousel-item w-screen h-screen flex flex-col justify-center items-center gap-4"
      style={{ left: xcors, top: ycors }}
    >
      <div className="w-96 h-auto overflow-hidden">
        <h1 className="text-4xl mb-7 font-riz-h leading-normal">🙋‍♂️So now,</h1>
        <p className="max-w-xs md:max-w-md min-h-6 font-riz-body">
          <span className={styles.letter}>{type}</span>
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};

Slide13.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  );
};

export default Slide13;
