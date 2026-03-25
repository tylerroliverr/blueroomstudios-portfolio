'use client';
import styles from "../styles/footer.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../styles/theme.css";
export default function Footer() {

  const { theme, changeTheme } = useContext(ThemeContext);
  const lastUpdatedText = "Last Updated: 26 March 2026";

  return (
    <>
      <div className={styles.footerContainer}>
        <div className="lineDivFooter">

          <div className={styles.lastUpdatedDiv}>
            <p>{lastUpdatedText}</p>
          </div>
          <p>|</p>
          <div className={styles.themeDiv}>
            <div className="themeButtons">
              <p className={`link blueButton`}
                onClick={() => changeTheme('blue')} disabled={theme === 'blue'}>
                [blueroom]
              </p>
              <p className={`link blackButton`}
                onClick={() => changeTheme('black')} disabled={theme === 'black'}>
                [darkroom]
              </p>
              <p className={`link redButton`}
                onClick={() => changeTheme('red')} disabled={theme === 'red'}>
                [redroom]
              </p>
            </div>
          </div>
          <div className={`${styles.contactDiv} footer-star`}>
            <a className="link" href="https://www.instagram.com/blueroom.studios/" target="_blank">
              <p>@blueroom.studios</p>
            </a>
            <p>|</p>
            <p>help@blueroomstudios.com.au</p>
          </div>
        </div>
      </div >

      <div className={styles.footerContainerMobile}>
        <div className="lineDivFooterMobile">

          <div className={styles.lastUpdatedDiv}>
            <p>{lastUpdatedText}</p>
            <div className="themeButtons">
              <p className={`link blueButton`}
                onClick={() => changeTheme('blue')} disabled={theme === 'blue'}>
                [blueroom]
              </p>
              <p className={`link blackButton`}
                onClick={() => changeTheme('black')} disabled={theme === 'black'}>
                [darkroom]
              </p>
              <p className={`link redButton`}
                onClick={() => changeTheme('red')} disabled={theme === 'red'}>
                [redroom]
              </p>
            </div>
          </div>
          <div className={`${styles.contactDiv}`}>
            <div className={`${styles.contactItem} ${styles.instagram}`}>
              <a className="link" href="https://www.instagram.com/blueroom.studios/" target="_blank">
                <p>@blueroom.studios</p>
              </a>
            </div>
            <div className={`${styles.contactItem} ${styles.email}`}>
              <p>help@blueroomstudios.com.au</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}