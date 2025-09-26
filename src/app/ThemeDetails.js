import React from "react";

const ThemeDetails = ({ theme }) => {
    if (!theme || !theme.fonts ) return null; // Nothing to render if no theme is provided
    return (
        <div className="flex flex-row">
            <div className="flex flex-col font-inter w-1/2">
                <div className="font-poppins color-white text-[1.7rem]" > Color Palette Strip</div >
                <div className="flex my-5 justify-start gap-3">
                    {[theme.bgColor, theme.textColor, theme.accentColor].map(
                        (color) => (
                            <div key={color} className="w-32 h-48 rounded-md border"
                                style={{ backgroundColor: color }} />
                        )
                    )}
                </div>
            </div>
            <div className="flex flex-col font-inter w-1/2">
                <div className="font-poppins color-white text-[1.7rem]" > Typography </div >
                <div className="flex flex-col my-5 ml-3 justify-start">
                    {[theme.fonts.logo, theme.fonts.heading, theme.fonts.body].map(
                        (font) => (
                            <div key={font} className="color-white text-[1.5rem]" style={{ fontFamily: font }}>
                                {font}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>

    );

};

export default ThemeDetails;