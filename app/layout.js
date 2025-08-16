import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";
import "./styles/theme.css";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./components/ThemeProvider";
import SmoothScrolling from "./components/SmoothScrolling";
import Preloader from "./components/Preloader";
import { Analytics } from "@vercel/analytics/react"
import NavbarNew from "./components/NavbarNew";
import Footer from "./components/Footer";

export const metadata = {
  title: "blueroom studios",
  description: "creative web design and development",
};

export const revalidate = 0;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oxd7kuk.css" />
      </head>
      <body>
        <Analytics />
        <ThemeProvider>
          {/* <Preloader /> */}
          <NavbarNew />
          <CustomCursor />
          <main className="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
      <Script src="/cursorScript.js" />

    </html>
  );
}
