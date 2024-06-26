import Navbar from "./components/Navbar";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
