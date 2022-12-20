import React from "react";
import Header from "../components/header/Header";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <section className="max-w-7xl m-auto">{children}</section>
    </div>
  );
};

export default GlobalLayout;
