'use client';
import styles from "../styles/footer.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../styles/theme.css";
export default function Footer() {

  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.lastUpdatedDiv}>
          <p>Last Updated: 18 December 2025</p>
        </div>
        <div className={styles.themeDiv}>
          <div className="themeButtons">
            <p className={`link blueButton`}
              onClick={() => changeTheme('blue')} disabled={theme === 'blue'}>
              (blueroom)
            </p>
            <p className={`link redButton`}
              onClick={() => changeTheme('red')} disabled={theme === 'red'}>
              (redroom)
            </p>
            <p className={`link blackButton`}
              onClick={() => changeTheme('black')} disabled={theme === 'black'}>
              (darkroom)
            </p>
          </div>
        </div>
      </div >
    </>
  )
}