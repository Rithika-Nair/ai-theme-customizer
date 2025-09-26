import { Inter, Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "HueAI",
  description: "Created by Rithika Nair",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
