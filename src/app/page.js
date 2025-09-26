'use client'
import Image from "next/image";
import BusinessIdeaForm from "./BusinessIdeaForm";
import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="pt-15 pl-15 w-full">
      <main className="flex flex-col w-full">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-2">
            <div className="font-roboto text-[5rem] color-accent mb-1">HueAI</div>
            <div className="font-poppins text-[2.5rem] mb-1">Discover the Perfect Theme for Your Business</div>
            <div className="font-inter text-[1.75rem] mb-1">Describe your business and let HueAI generate modern, ready-to-use website themes in seconds!</div>
          </div>
          <div className="text-[18rem] mb-1">🎨</div>
        </div>
        <div className="mx-auto mb-10">
          <button>Get Started&nbsp; <FaArrowDownLong/> </button>
        </div>
        <div className="w-full">
          <BusinessIdeaForm />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
