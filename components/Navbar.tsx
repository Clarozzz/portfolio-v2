"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-6 px-4 animate-fadeIn">
      <div
        className="
        mx-auto
        lg:max-w-3/4
        rounded-2xl
        px-6 lg:px-8 py-4
        bg-white/95
        border border-gray-200/50
        drop-shadow-md
      "
      >
        <div className="flex items-center justify-between">

          <Link
            href="./"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-xl lg:text-2xl font-semibold tracking-tight">
              Cesar Claros
              <span className="text-blue-500">.</span>
            </p>
          </Link>

          <div className="hidden lg:flex gap-10 items-center text-md font-medium text-gray-700">
            <Link
              href="./#projects"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/1GNb3j72JEN-HCwn_SDF9ODGW6Dg-dNEY/view?usp=sharing"
              target="_blank"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Resume
            </Link>
          </div>
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-4 text-md font-medium text-gray-700 pb-2">
            <Link
              href="./#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/1GNb3j72JEN-HCwn_SDF9ODGW6Dg-dNEY/view?usp=sharing"
              onClick={() => setIsOpen(false)}
              target="_blank"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              Resume
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}