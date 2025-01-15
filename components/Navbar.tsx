import React from "react";
import Image from "next/image";
import logo from "@/public/assets/logo3.png";
export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-[1px] border-gray-200">
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="ml-2 text-lg font-medium hidden lg:block">
            KADO UI
          </span>
        </div>
        <ul className="flex space-x-6 text-xs sm:text-sm">
          <li>
            <a
              href="#docs"
              className="text-gray-700 hover:text-gray-900 transition font-medium"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#installation"
              className="text-gray-700 hover:text-gray-900 transition font-medium"
            >
              Installation
            </a>
          </li>
          <li>
            <a
              href="#components"
              className="text-gray-700 hover:text-gray-900 transition font-medium"
            >
              Components
            </a>
          </li>
        </ul>
      </div>

      <div>
        <button className="px-4 py-2 text-white bg-[#FCAB42] hover:bg-[#FD994D] rounded-md transition hidden lg:block">
          Newsletter
        </button>
      </div>
    </nav>
  );
};
