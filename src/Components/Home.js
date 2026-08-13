import React, { useEffect, useRef, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import sun from "../Images/Celestial-Bodies/sun.webp";
import moon from "../Images/Celestial-Bodies/moon.webp";
import cloud from "../Images/cloud1.webp";
import stars from "../Images/Celestial-Bodies/stars.webp";
import dayShape from "../Images/Shapes/shape1.webp";
import frontDay from "../Images/Landscape/fontHouse1_Day.webp";
import backDay from "../Images/Landscape/backround_Day.webp";
import frontNight from "../Images/Landscape/frontHouse1_Night.webp";
import backNight from "../Images/Landscape/backround_Night.webp";

export default function Home({ isDark, opacityStyle }) {
    const sectionRef = useRef(null);
    const parallaxRefs = useRef([]);
    const previousThemeRef = useRef(isDark);
    const [celestialState, setCelestialState] = useState(isDark ? "toggle" : "");
    const shapeMaskStyle = { "--shape-mask": `url(${dayShape})` };

    useEffect(() => {
        const wasDark = previousThemeRef.current;
        previousThemeRef.current = isDark;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCelestialState(isDark ? "toggle" : "");
            return undefined;
        }

        if (isDark) {
            setCelestialState("toggle");
            return undefined;
        }

        if (!wasDark) {
            setCelestialState("");
            return undefined;
        }

        setCelestialState("transition");
        let frameId = null;
        const timeoutId = window.setTimeout(() => {
            setCelestialState("reset");
            frameId = window.requestAnimationFrame(() => setCelestialState(""));
        }, 1000);

        return () => {
            window.clearTimeout(timeoutId);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, [isDark]);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        let frameId = null;
        const update = () => {
            frameId = null;
            const section = sectionRef.current;
            if (!section) return;

            const sectionRect = section.getBoundingClientRect();
            if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;

            const maxParallaxScroll = Math.min(section.offsetHeight, window.innerHeight * 0.5);
            const value = Math.min(Math.max(-sectionRect.top, 0), maxParallaxScroll);
            const shifts = [0.05, 0.05, 0.1, 0.1, 0.12];

            parallaxRefs.current.forEach((element, index) => {
                if (element) element.style.setProperty("--parallax-y", `${value * shifts[index]}px`);
            });
        };
        const scheduleUpdate = () => {
            if (frameId === null) frameId = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, []);

    const setParallaxRef = index => element => {
        parallaxRefs.current[index] = element;
    };

    return (
        <section id="home" ref={sectionRef} aria-labelledby="home-title">
            <div className="backround-imgs" aria-hidden="true">
                <div className="all-imgs">
                    <div className="nightGradient" style={opacityStyle}></div>
                    <span className={`celestialBodies${celestialState ? ` ${celestialState}` : ""}`}>
                        <img src={sun} alt="" className="sun-img" width="1920" height="1080" decoding="async" />
                        <img src={moon} alt="" className="moon-img" width="1920" height="1080" decoding="async" />
                    </span>
                    <img src={cloud} alt="" className="cloud-img" width="238" height="171" decoding="async" />
                    <img src={stars} alt="" className="stars-img" width="4500" height="1554" style={opacityStyle} ref={setParallaxRef(4)} decoding="async" />
                    <div className="white-block"></div>
                    <div className="dayShape" style={shapeMaskStyle}></div>
                    <img src={frontDay} alt="" className="front-Day" width="1920" height="1080" ref={setParallaxRef(0)} decoding="async" />
                    <img src={backDay} alt="" className="back-Day" width="3127" height="1080" ref={setParallaxRef(2)} decoding="async" />
                    <div className="nightShape" style={{ ...shapeMaskStyle, ...opacityStyle }}></div>
                    <img src={frontNight} alt="" className="front-Night" width="1920" height="1080" style={opacityStyle} ref={setParallaxRef(1)} decoding="async" />
                    <img src={backNight} alt="" className="back-Night" width="3127" height="1080" style={opacityStyle} ref={setParallaxRef(3)} decoding="async" />
                </div>
            </div>
            <div className="home-container1">
                <div className="home-container2">
                    <div className="home-text">
                        <p className="home-eyebrow">Hello, my name is</p>
                        <h1 id="home-title">Jesus Aguayo</h1>
                        <p className="home-role">An aspiring Web Developer</p>
                        <a className="home-btn" href="#projects">
                            <span>VIEW MY PROJECTS</span>
                            <span aria-hidden="true"><IoChevronForwardOutline /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
