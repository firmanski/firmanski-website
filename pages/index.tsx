import styles from "../styles/Home.module.css";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../layout/MainLayout";
import HomeLayout from "../layout/StoriesLayout";
import Projects from "./projects";
import GlobalLayout from "../layout/GlobalLayout";

const Home: NextPageWithLayout = () => {
  return <Projects />;
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <GlobalLayout>{page}</GlobalLayout>
    </MainLayout>
  );
};

export default Home;
