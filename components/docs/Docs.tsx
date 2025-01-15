import React from "react";
import { Package } from "./Package";

export const Docs = () => {
  return (
    <section className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl font-bold">Introduction</h1>
        <p className="text-sm text-gray-400 font-medium w-[550px]">
          A simple UI library that targets Iranian users and all the persian
          speaking diaspora around the world who wants to deliver persian
          user-friendly interfaces
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl font-bold">Installation</h1>
        <Package packageName="npm" />
        <Package packageName="yarn" />
      </div>
    </section>
  );
};
