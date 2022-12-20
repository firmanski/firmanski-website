import React from "react";
import Link from "next/link";

const HOME_SECTION = [
  "slide1",
  "slide2",
  "slide3",
  "slide4",
  "slide5",
  "slide6",
  "slide7",
  "slide8",
  "slide9",
  "slide10",
  "slide11",
  "slide12",
  "slide13",
];

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fixed bottom-4 right-4">
        <ul className="flex justify-between items-center gap-3 w-fit before:bg-slate-600 before:left-0 before:right-0">
          {HOME_SECTION.map((section, index) => (
            <li
              key={index}
              className="flex justify-center items-center w-7 h-7 text-center rounded-full text-xs bg-slate-600 text-white"
            >
              <Link href={`/stories/${section}`}>{index + 1}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default HomeLayout;
