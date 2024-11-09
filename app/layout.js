import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";
import "./styles/theme.css";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./components/ThemeProvider";
import SmoothScrolling from "./components/SmoothScrolling";
import Preloader from "./components/Preloader";

export const metadata = {
  title: "blueroom studios",
  description: "creative web design and development",
};

export const revalidate = 10;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oxd7kuk.css" />
      </head>
      <body>
        <ThemeProvider>
          <Preloader />
          <Navbar />
          <CustomCursor />
          <main className="main">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <Script src="/cursorScript.js" />
    </html>
  );
}
