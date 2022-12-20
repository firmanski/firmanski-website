import React from "react";
import Image from "next/image";
import MainNavigation from "../tabs/MainNavigation";
import logo from "../../public/svg/rizfirsy.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-7xl h-16 px-4">
      <Link href="/stories/slide1">
        <Image src={logo} alt="rizfirsy logo" height={50} />
      </Link>
      <MainNavigation />
    </header>
  );
};

export default Header;
