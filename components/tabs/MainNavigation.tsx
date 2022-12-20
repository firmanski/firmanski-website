import React from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <ul className="flex justify-center items-center rounded-full gap-9">
      <li>
        <Link
          href="/stories/slide1"
          className="py-3 relative before:absolute before:hidden before:left-0 before:right-0 before:bottom-0 before:h-1 before:bg-riz-purple before:z-10 before:rounded-full hover:before:block"
        >
          Stories
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className="py-3 relative before:absolute before:hidden before:left-0 before:right-0 before:bottom-0 before:h-1 before:bg-riz-purple before:z-10 before:rounded-full hover:before:block"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className="py-3 relative before:absolute before:hidden before:left-0 before:right-0 before:bottom-0 before:h-1 before:bg-riz-purple before:z-10 before:rounded-full hover:before:block"
        >
          Blog
        </Link>
      </li>
      <li className="text-white">
        <Link
          href="/contact"
          className={`${styles.after} px-5 py-3 relative before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 bg-riz-purple before:z-10 before:rounded-full`}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MainNavigation;
