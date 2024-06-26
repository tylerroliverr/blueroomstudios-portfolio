import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  title: "blueroom studios",
  description: "creative web design and development",
};

export const revalidate = 3600;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oxd7kuk.css" />
      </head>
      <body>
        <Navbar />
        <CustomCursor />
        {children}
      </body>
      <Script src="/cursorScript.js" />
    </html>
  );
}
