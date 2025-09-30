import React from "react";

const ThemeDetails = ({ theme }) => {
    if (!theme || !theme.fonts) return null; // Nothing to render if no theme is provided
    return (
        <div className="flex flex-col">
            <h1 className="font-poppins color-white text-[1rem] w-full mb-3 sm:text-[1.5rem]">Design Rationale: {theme["design rationale"]}</h1>
            <hr></hr>
            <div className="flex flex-col sm:flex-row pt-2">
                <div className="flex flex-col font-inter w-full sm:w-1/2">
                    <div className="font-poppins color-white text-[1rem] sm:text-[1.7rem]" > Color Palette Strip</div >
                    <div className="flex my-5 justify-start gap-2 sm:gap-3">
                        {[theme.bgColor, theme.textColor, theme.accentColor].map(
                            (color) => (
                                <div key={color} className="w-32 sm:w-30 h-20 sm:h-48 rounded-md border"
                                    style={{ backgroundColor: color }} />
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col font-inter w-full sm:w-1/2">
                    <div className="font-poppins color-white text-[1rem] sm:text-[1.7rem]" > Typography </div >
                    <div className="flex flex-col my-5 ml-3 justify-start">
                        {[theme.fonts.logo, theme.fonts.heading, theme.fonts.body].map(
                            (font) => (
                                <div key={font} className="color-white text-[1.1rem] sm:text-[1.5rem]" style={{ fontFamily: font }}>
                                    {font}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>

    );

};

export default ThemeDetails;