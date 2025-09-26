'use client'
import BusinessIdeaForm from "./BusinessIdeaForm";
import React from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import HeroPreview from "./HeroPreview";
import ThemeDetails from "./ThemeDetails";

const aiResponse = {
  "bgColor": "#FDFBF7",
  "textColor": "#1C1C1C",
  "accentColor": "#CFA66F",
  "fonts": {
    "logo": "Cinzel, serif",
    "heading": "Playfair Display, serif",
    "body": "Inter, sans-serif"
  },
  "headline": "Elegant Designs, Modern Spirit",
  "subtext": "Auralie crafts refined, contemporary jewellery pieces for a youthful, stylish audience—perfect for everyday elegance and special moments.",
  "ctatext": "Explore the Collection"
};
  
export default function Home() {
  return (
    <div className="pt-15 pl-15 pr-10 w-full">
      <main className="flex flex-col w-full">
        <div className="grid grid-cols-3 w-full">
          <div className="col-span-2">
            <div className="font-roboto text-[5rem] color-accent mb-1">HueAI</div>
            <div className="font-poppins text-[2.5rem] mb-1">Discover the Perfect Theme for Your Business</div>
            <div className="font-inter text-[1.75rem] mb-1">Describe your business and let HueAI generate modern, ready-to-use website themes in seconds!</div>
          </div>
          <div className="text-[18rem] mb-1">🎨</div>
        </div>
        <div className="flex flex-row mx-auto mb-10 items-center">
          <h1 className="text-[1.2rem] font-roboto color-accent">Scroll Down & Get Started&nbsp;</h1>
          <h1 className="text-[1rem] color-accent"><FaArrowDownLong/></h1>
        </div>
        <div className="w-full mb-10" id="form">
          <BusinessIdeaForm />
        </div>
        {aiResponse?.fonts && (
          <div className="w-full mt-1 p-2 mb-2 mr-10 w-full rounded-md shadow-[0_0_4px_2px_#BB86FC]">
            <HeroPreview businessName="Auralie" theme={aiResponse} />
          </div>
        )}
        {aiResponse?.fonts && (
          <div className="w-full mt-1 p-2 mr-10 w-full">
            <ThemeDetails theme={aiResponse} />
          </div>
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
