"use client";

import React from "react";

import { motion } from "motion/react";
import Link from "next/link";

export const Navbara = () => {
  return (
    <nav className=" max-w-5xl mx-auto w-full   flex items-center   py-2.5">
      <div className="w-full flex items-center justify-between px-1.5">
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex   justify-center gap-3 items-center"
        >
          <Link href={"/"} className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.49945C10.7465 0.557917 9.18841 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 9.18841 0.557917 10.7465 1.49945 12C0.557917 13.2535 0 14.8116 0 16.5C0 20.6421 3.35786 24 7.5 24C9.18841 24 10.7465 23.4421 12 22.5006C13.2535 23.4421 14.8116 24 16.5 24C20.6421 24 24 20.6421 24 16.5C24 14.8116 23.4421 13.2535 22.5006 12C23.4421 10.7465 24 9.18841 24 7.5C24 3.35786 20.6421 0 16.5 0C14.8116 0 13.2535 0.557917 12 1.49945ZM12 6.6C10.8071 6.6 9.84 7.56707 9.84 8.76V15.24C9.84 16.4329 10.8071 17.4 12 17.4C13.1929 17.4 14.16 16.4329 14.16 15.24V8.76C14.16 7.56707 13.1929 6.6 12 6.6Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <div className="flex gap-2  items-center justify-center text-neutral-700 font-sans font-semibold">
            <h1 className=" hidden md:block text-[14px] cursor-pointer hover:text-neutral-600 hover:bg-neutral-600/10 rounded-md px-2 py-0.5 transition-all ease-in-out duration-300">
              Features
            </h1>
            <h1 className="text-[14px] rounded-md  hover:text-neutral-600 hover:bg-neutral-600/10 cursor-pointer px-2 py-0.5 transition-all ease-in-out duration-300">
              Pricing
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex items-center gap-4 p-0"
        >
          <span className="text-[14px] hidden md:block font-semibold text-base font-sans text-neutral-700  hover:bg-neutral-600/10 px-2 py-0.5 rounded-md cursor-pointer  transition-colors duration-300 ease-in-out hover:text-neutral-600">
            Login
          </span>
          <button className="border  max-w-[7rem] w-full mx-auto px-3 py-1 font-sans border-blue-400  bg-blue-500 text-white text-[14px] font-medium rounded-md  shadow-[inset_1px_2px_1px_rgba(30,30,30,0.5)_inset_-1px_-2px_-1px_rgba(30,3030,0.5)] hover:bg-blue-400 hover:text-neutral-100   cursor-pointer  transition-transform duration-300 ease-in-out">
            Get started
          </button>
        </motion.div>
      </div>
    </nav>
  );
};
