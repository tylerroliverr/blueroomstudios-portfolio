'use client';
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../styles/theme.css";

export function ThemeButtons() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="themeButtons">
      <p className={`link blueButton`}
        onClick={() => changeTheme('blue')} disabled={theme === 'blue'}>
        [Blue <span className="roomText">room</span>]
      </p>
      <p className={`link redButton`}
        onClick={() => changeTheme('red')} disabled={theme === 'red'}>
        [Red <span className="roomText">room</span>]
      </p>
      <p className={`link blackButton`}
        onClick={() => changeTheme('black')} disabled={theme === 'black'}>
        [Black <span className="roomText">room</span>]
      </p>
    </div>
  )
}