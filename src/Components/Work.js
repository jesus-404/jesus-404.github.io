import React, { useMemo, useRef, useState } from "react";
import WorkCard from "./Sub_components/WorkCard";
import WorkData from "./Data/WorkData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Work() {
    const [activeCategory, setActiveCategory] = useState("software");
    const gridRef = useRef(null);
    useRevealOnScroll(gridRef, ".work-card", true, activeCategory);

    const visibleProjects = useMemo(
        () => WorkData.filter(project => project.category === activeCategory),
        [activeCategory]
    );

    return (
        <section id="projects" aria-labelledby="projects-title">
            <div className="work-container">
                <div className="work-header">
                    <h2 id="projects-title" className="work-title text">TECHNICAL PROJECTS</h2>
                    <p className="work-desc text">Networking labs and software projects supporting my Network Engineering foundation.</p>
                    <div
                        className="project-switcher"
                        data-active-category={activeCategory}
                        role="group"
                        aria-label="Project category"
                    >
                        <button
                            type="button"
                            className={`project-tab${activeCategory === "network" ? " active" : ""}`}
                            aria-pressed={activeCategory === "network"}
                            onClick={() => setActiveCategory("network")}
                        >
                            Network Labs
                        </button>
                        <button
                            type="button"
                            className={`project-tab${activeCategory === "software" ? " active" : ""}`}
                            aria-pressed={activeCategory === "software"}
                            onClick={() => setActiveCategory("software")}
                        >
                            Software Projects
                        </button>
                    </div>
                    {visibleProjects.length > 0 && <p className="work-hint">Scroll to browse the project rail.</p>}
                </div>
                {visibleProjects.length > 0 ? (
                    <ul className="work-grid" ref={gridRef} aria-label={`${activeCategory === "network" ? "Network lab" : "Software"} projects`}>
                        {visibleProjects.map(project => (
                            <WorkCard key={project.title} {...project} />
                        ))}
                    </ul>
                ) : (
                    <div className="work-empty" role="status">
                        <h3>Network labs are being documented</h3>
                        <p>Completed Cisco Packet Tracer labs will appear here as they are finalized.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
