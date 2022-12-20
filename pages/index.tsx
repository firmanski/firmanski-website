import styles from "../styles/Home.module.css";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainNavigation from "../components/tabs/MainNavigation";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/HomeLayout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className={`${styles.container} w-screen h-screen`}>
        <div className={`carousel w-full h-full`}>
          <div
            id="item9"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md"></p>
          </div>
          <div
            id="item10"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md"></p>
          </div>
          <div
            id="item11"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              
            </p>
          </div>
          <div
            id="item12"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              
            </p>
          </div>
          <div
            id="item13"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  );
};

export default Home;
