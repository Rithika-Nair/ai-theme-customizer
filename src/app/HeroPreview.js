import React from "react";

const HeroPreview = ({businessName, theme}) => {
    if (!theme || !theme.fonts ) return null; // Nothing to render if no theme is provided
    return (
        <div className="flex flex-col pt-5 pl-5 sm:pt-15 sm:pl-15" style={{ fontFamily: theme.fonts.body, backgroundColor: theme.bgColor }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                <div className="sm:col-span-2 flex flex-col justify-center">
                    <div className="text-[2rem] sm:text-[4rem] mb-1"
                    style={{ fontFamily: theme.fonts.logo, color: theme.accentColor }}>{businessName}</div>
                    <div className="text-[1.75rem] sm:text-[2.5rem] mb-1" style={{fontFamily: theme.fonts.heading, color: theme.textColor }}>{theme.headline}</div>
                    <div className="text-[1rem] sm:text-[1.2rem] mb-5" style={{ color: theme.textColor }}>
                {theme.subtext} </div>
                </div>
            </div>
            <div className="mr-auto mb-10">
                <button style={{ backgroundColor: theme.accentColor, color: theme.bgColor }}>
                    {theme.ctatext}</button>
            </div>
        </div>
    );
};

export default HeroPreview;
