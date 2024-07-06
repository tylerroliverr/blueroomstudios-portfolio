'use client';
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('blue');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && ['red', 'blue', 'black'].includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const changeTheme = (newTheme) => {
        if (['red', 'blue', 'black'].includes(newTheme)) {
            setTheme(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}