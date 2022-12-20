import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../layout/MainLayout";
import GlobalLayout from "../../layout/GlobalLayout";
import SocialLinks from "../../components/navigations/SocialLinks";

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <SocialLinks />
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <GlobalLayout>{page}</GlobalLayout>
    </MainLayout>
  );
};
export default Contact;
