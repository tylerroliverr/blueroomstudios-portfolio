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
                [Blue]
            </p>
            <p className={`link redButton`}
                onClick={() => changeTheme('red')} disabled={theme === 'red'}>
                [Red]
            </p>
            <p className={`link blackButton`}
                onClick={() => changeTheme('black')} disabled={theme === 'black'}>
                [Black]
            </p>
        </div>
    )
}