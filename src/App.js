import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Styles/main.scss";
import useAnimations from "./Animation";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";

function getInitialTheme() {
    try {
        const savedTheme = window.localStorage.getItem("portfolio-theme");
        if (savedTheme) return savedTheme === "dark";
    } catch (error) {
        // Storage can be unavailable in privacy-focused browser modes.
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function App() {
    useAnimations();

    const headerRef = useRef(null);
    const indicatorRef = useRef(null);
    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.style.colorScheme = isDark ? "dark" : "light";
        try {
            window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
        } catch (error) {
            // The visual theme still works when storage is unavailable.
        }
    }, [isDark]);

    const toggleTheme = useCallback(() => setIsDark(value => !value), []);
    const opacityStyle = { opacity: isDark ? 1 : 0 };
    const filterStyle = { filter: isDark ? "brightness(0.75)" : "brightness(1)" };

    return (
        <div id="app" className={isDark ? "dark" : ""}>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <header id="header" ref={headerRef}>
                <div className="indicator" ref={indicatorRef} aria-hidden="true"></div>
                <NavBar
                    headerRef={headerRef}
                    indicatorRef={indicatorRef}
                    isDark={isDark}
                    onToggleTheme={toggleTheme}
                />
            </header>
            <main id="main-content">
                <Home isDark={isDark} opacityStyle={opacityStyle} />
                <About />
                <Work />
                <Skills />
                <Experiences />
            </main>
            <footer>
                <Contact opacityStyle={opacityStyle} filterStyle={filterStyle} />
            </footer>
        </div>
    );
}
