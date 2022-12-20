import React from "react";
import Head from "next/head";
import Header from "../components/header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Rizfirsy | Frontend developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="min-w-screen min-h-screen bg-white">{children}</main>
    </>
  );
};

export default MainLayout;
