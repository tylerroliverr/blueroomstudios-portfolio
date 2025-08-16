"use client";

import Link from "next/link";
import style from "../styles/navbar.module.css";
import CursorHoverLink from "./CursorLinkHover";
import { usePathname } from "next/navigation";

export default function NavbarNew() {
  const pathname = usePathname();

  return (
    <>
      <CursorHoverLink />
      <div className={style.navbar}>
        <div className={style.titleDiv}>
          <p className={`${style.title} link`}>
            <Link href={"/"}>
              <span className={style.titleSpacer}>B</span>lueroom
            </Link>
          </p>
          <div className="star-text-div">
            <p className="star-text"></p>
          </div>
        </div>
        <div className={style.menuDiv}>
          {/* Show "Home" if not already on home page */}
          {pathname !== "/" && (
            <Link href={"/"}><p className="link">Projects</p></Link>
          )}

          <Link href={"/services"}><p className="link">Services</p></Link>
          <Link href={"/acknowledgement"}><p className="link">Acknowledgement</p></Link>
        </div>
      </div>
    </>
  );
}
