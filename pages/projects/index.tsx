import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../layout/MainLayout";
import GlobalLayout from "../../layout/GlobalLayout";

const Projects: NextPageWithLayout = () => {
  return <div>Projects Page</div>;
};

Projects.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <GlobalLayout>{page}</GlobalLayout>
    </MainLayout>
  );
};

export default Projects;
