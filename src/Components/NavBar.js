import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import gsap from "gsap";

const navigationItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "exp", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" }
];

export default function NavBar({ headerRef, indicatorRef, isDark, onToggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const itemRefs = useRef({});
    const firstLinkRef = useRef(null);
    const menuTriggerRef = useRef(null);
    const activeSectionRef = useRef(activeSection);
    const indicatorReadyRef = useRef(false);
    const previousMenuOpenRef = useRef(false);

    activeSectionRef.current = activeSection;

    const positionIndicator = useCallback((sectionId, animate = true) => {
        const indicator = indicatorRef.current;
        const activeItem = itemRefs.current[sectionId];
        if (!indicator || !activeItem || window.innerWidth <= 1024) return;

        const position = activeItem.getBoundingClientRect();
        indicator.style.transition = animate
            ? "transform .45s cubic-bezier(.22, 1, .36, 1), width .35s ease"
            : "none";
        indicator.style.transform = `translate3d(${position.left}px, 0, 0)`;
        indicator.style.width = `${position.width}px`;
    }, [indicatorRef]);

    useEffect(() => {
        const header = headerRef.current;
        const indicator = indicatorRef.current;
        if (!header || !indicator) return undefined;

        let frameId = null;
        let headerMode = "";

        const update = () => {
            frameId = null;
            const desktop = window.innerWidth > 1024;
            const scrollPosition = window.scrollY;
            const about = document.getElementById("about");
            const aboutTop = about ? about.offsetTop : window.innerHeight;
            const sticky = desktop ? scrollPosition >= aboutTop - 5 : true;

            if (sticky) {
                header.classList.add("sticky");
                indicator.classList.add("sticky");
            }

            const nextMode = desktop
                ? (sticky ? "desktop-sticky" : "desktop-top")
                : (scrollPosition >= aboutTop - 100 ? "mobile-sticky" : "mobile-top");

            if (nextMode !== headerMode) {
                const initialDesktopTop = headerMode === "" && nextMode === "desktop-top";
                headerMode = nextMode;
                gsap.killTweensOf(header);

                if (initialDesktopTop) {
                    header.classList.remove("sticky");
                    indicator.classList.remove("sticky");
                    gsap.set(header, { y: 0, backgroundColor: "transparent" });
                } else if (nextMode === "desktop-sticky") {
                    gsap.to(header, { y: 100, backgroundColor: "var(--sticky-surface)", ease: "expo.out", duration: 0.35, overwrite: true });
                } else if (nextMode === "desktop-top") {
                    const removeStickyState = () => {
                        if (headerMode !== "desktop-top") return;
                        header.classList.remove("sticky");
                        indicator.classList.remove("sticky");
                        gsap.set(header, { y: 0, backgroundColor: "transparent" });
                    };

                    if (scrollPosition <= 4) {
                        gsap.to(header, {
                            backgroundColor: "transparent",
                            ease: "power2.out",
                            duration: 0.1,
                            overwrite: true,
                            onComplete: removeStickyState
                        });
                    } else {
                        gsap.timeline({ onComplete: removeStickyState })
                            .to(header, { y: 0, ease: "expo.out", duration: 0.35, overwrite: "auto" }, 0)
                            .to(header, { backgroundColor: "transparent", ease: "power2.out", duration: 0.1, overwrite: "auto" }, 0);
                    }
                } else {
                    gsap.set(header, { y: 100 });
                    gsap.to(header, {
                        backgroundColor: nextMode === "mobile-sticky" ? "var(--sticky-surface)" : "transparent",
                        ease: "power2.out",
                        duration: 0.08,
                        overwrite: true
                    });
                }
            }

            const activationPoint = scrollPosition + window.innerHeight * 0.35;
            let current = "home";
            navigationItems.forEach(item => {
                const section = document.getElementById(item.id);
                if (section && activationPoint >= section.offsetTop) current = item.id;
            });
            setActiveSection(previous => previous === current ? previous : current);
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
            gsap.killTweensOf(header);
        };
    }, [headerRef, indicatorRef]);

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            positionIndicator(activeSection, indicatorReadyRef.current);
            indicatorReadyRef.current = true;
        });
        return () => window.cancelAnimationFrame(frameId);
    }, [activeSection, positionIndicator]);

    useEffect(() => {
        let frameId = null;
        let cancelled = false;
        const update = () => {
            if (frameId !== null) window.cancelAnimationFrame(frameId);
            frameId = window.requestAnimationFrame(() => {
                if (!cancelled) positionIndicator(activeSectionRef.current, false);
            });
        };
        window.addEventListener("resize", update);
        document.fonts?.ready.then(update);
        return () => {
            cancelled = true;
            window.removeEventListener("resize", update);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, [positionIndicator]);

    useEffect(() => {
        const wasOpen = previousMenuOpenRef.current;
        previousMenuOpenRef.current = menuOpen;
        document.body.classList.toggle("menu-open", menuOpen);

        if (menuOpen) {
            const frameId = window.requestAnimationFrame(() => firstLinkRef.current?.focus());
            return () => window.cancelAnimationFrame(frameId);
        }

        if (wasOpen) {
            const frameId = window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
            return () => window.cancelAnimationFrame(frameId);
        }

        return undefined;
    }, [menuOpen]);

    useEffect(() => {
        const closeDesktopMenu = () => {
            if (window.innerWidth > 1024) setMenuOpen(false);
        };
        window.addEventListener("resize", closeDesktopMenu);
        return () => window.removeEventListener("resize", closeDesktopMenu);
    }, []);

    useEffect(() => {
        const closeOnEscape = event => {
            if (event.key === "Escape" && menuOpen) setMenuOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [menuOpen]);

    const selectSection = id => {
        setActiveSection(id);
        setMenuOpen(false);
    };

    return (
        <section id="nav-bar" style={{ zIndex: menuOpen ? 23 : 19 }}>
            <nav className="navigation" aria-label="Primary navigation">
                <button
                    ref={menuTriggerRef}
                    className={`hamburger-menu${menuOpen ? " active" : ""}`}
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen(value => !value)}
                >
                    <span className={`menu-lines${menuOpen ? " active" : ""}`} aria-hidden="true"></span>
                </button>
                <ul id="primary-navigation" className={`ulist${menuOpen ? " toggle" : ""}`}>
                    {navigationItems.map((item, index) => (
                        <li
                            key={item.id}
                            ref={element => { itemRefs.current[item.id] = element; }}
                            className={`${item.id} list${activeSection === item.id ? " active" : ""}`}
                        >
                            <a
                                ref={index === 0 ? firstLinkRef : undefined}
                                href={`#${item.id}`}
                                aria-current={activeSection === item.id ? "location" : undefined}
                                onClick={() => selectSection(item.id)}
                            >
                                <span className="nav-text">{item.label}</span>
                            </a>
                        </li>
                    ))}
                    <li className="mode-item">
                        <button
                            className={`mode${isDark ? " active" : ""}`}
                            type="button"
                            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                            aria-pressed={isDark}
                            onClick={onToggleTheme}
                        >
                            <IoSunny className="sun-icon" aria-hidden="true" />
                            <IoMoon className="moon-icon" aria-hidden="true" />
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
