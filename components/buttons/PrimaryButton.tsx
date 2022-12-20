import React from "react";
import Link from "next/link";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button>
      <Link
        href="/contact"
        className={`px-5 py-3 relative bg-riz-purple rounded-lg hover:rounded-full`}
      >
        {children}
      </Link>
    </button>
  );
};

export default PrimaryButton;
