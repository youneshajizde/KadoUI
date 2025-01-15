"use client";

import { components, getStarted } from "@/lib/constant";
import Link from "next/link";
import React, { useState } from "react";
import { Docs } from "./docs/Docs";
import { ChevronRight } from "lucide-react";
import { CompCode } from "./componentsFolder/CompCode";
import { SideBar } from "./SideBar";
import { Components } from "./componentsFolder/Components";
export const Dashboard = () => {
  const [renderedContent, setRenderedContent] = useState("Components");
  return (
    <div className="flex h-screen px-6 mt-10 border-t-[1px] border-gray-200">
      {/* Sidebar */}
      <SideBar setRenderedContent={setRenderedContent} />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {renderedContent === "Components" ? (
          <Components />
        ) : renderedContent === "Installation" || "Introduction" ? (
          <Docs />
        ) : (
          <Components />
        )}
      </main>
    </div>
  );
};
