import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "SpicaLabs // System_Terminal",
    description: "Independent software laboratory focused on high-precision digital tools and intentional architecture.",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="selection:bg-blue-600 selection:text-white">
        <body
            className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-[#0A0A0A] 
          text-[#E0E0E0] 
          overflow-x-hidden
        `}
        >
        {children}
        </body>
        </html>
    );
}