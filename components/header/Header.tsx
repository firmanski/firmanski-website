import React from "react";
import Image from "next/image";
import MainNavigation from "../navigations/MainNavigation";
import logo from "../../public/rizfirsy.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-7">
      <div>
        <Image src={logo} alt="rizfirsy logo" height={50} />
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
