import React from "react";

export const Header = () => {
  return (
    <section className="mt-10 px-6 flex flex-col space-y-5">
      <div className="flex flex-col space-y-6">
        <h1 className="text-6xl font-black text-gradient glow">
          A Persian UI library <br /> for devs
        </h1>
        <p className="text-sm text-gray-500">
          A persian UI library for React , created using Typescript , components
          support right to left.
          <br /> It is also available on npm website
        </p>
      </div>

      <div className="flex items-center space-x-5">
        <button className="bg-[#FCAB42] px-3 py-2 text-sm rounded-lg hover:bg-[#FD994D] text-white">
          Get Started
        </button>
        <button className="bg-[#FCAB42] px-3 py-2 text-sm rounded-lg hover:bg-[#FD994D] text-white">
          Creators' Linkedin
        </button>
      </div>
    </section>
  );
};
