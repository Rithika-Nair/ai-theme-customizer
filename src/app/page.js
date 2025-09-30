'use client'
import React, { useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import BusinessIdeaForm from "./BusinessIdeaForm";
import HeroPreview from "./HeroPreview";
import ThemeDetails from "./ThemeDetails";

export default function Home() {
  const [aiResponse, setAiResponse] = useState(null);
  const [businessName, setBusinessName] = useState("");

  return (
    <div className="pt-5 pl-5 pr-5 sm:pt-15 sm:pl-15 sm:pr-10 w-full">
      <main className="flex flex-col w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          <div className="sm:col-span-2 flex flex-col justify-center">
            <div className="font-roboto text-[3rem] sm:text-[5rem] color-accent mb-1">HueAI</div>
            <div className="font-poppins text-[1.5rem] sm:text-[2.5rem] mb-1">Discover the Perfect Theme for Your Business</div>
            <div className="font-inter text-[1rem] sm:text-[1.75rem] sm:mb-1">
              Describe your business and let HueAI generate modern, ready-to-use website themes in seconds!
            </div>
          </div>
          <div className="text-[5rem] sm:text-[15rem] flex justify-center items-center mb-1">🎨</div>
        </div>

        <div className="flex flex-col sm:flex-row mx-auto mb-10 items-center justify-center">
          <h1 className="text-[1rem] sm:text-[1.2rem] font-roboto color-accent mb-2 sm:mb-0">Scroll Down & Get Started&nbsp;</h1>
          <h1 className="text-[1rem] color-accent"><FaArrowDownLong /></h1>
        </div>


        <div className="w-full mb-10" id="form">
          <BusinessIdeaForm
            onThemeGenerated={(themeJson, name) => {
              setAiResponse(themeJson);
              setBusinessName(name);
            }}
          />
        </div>

        {aiResponse && (
          <>
            <div className="w-full mt-1 p-2 mr-10">
              <ThemeDetails theme={aiResponse} />
            </div>
            <div className="w-full mt-1 p-2 mb-2 mr-10 rounded-md shadow-[0_0_4px_2px_#BB86FC]">
              <HeroPreview businessName={businessName} theme={aiResponse} />
            </div>
          </>
        )}

      </main>
      <footer className="mt-[5rem] mb-5 w-full flex justify-end">
        Created by&nbsp;
        <a href="https://rithikanair.framer.website/" className="underline text-blue-600 visited:text-purple-600">
          Rithika Nair
        </a>
      </footer>
    </div>
  );
}
