import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <section className="border-t-[1px] border-gray-200 w-full h-[70px] px-6 flex py-3">
      <span>
        Checkout the source code on my{" "}
        <Link href={"/github/younesHajizade"} className="underline font-medium">
          GitHub
        </Link>
      </span>
    </section>
  );
};
