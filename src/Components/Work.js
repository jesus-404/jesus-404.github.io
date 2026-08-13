import React, { useRef } from "react";
import WorkCard from "./Sub_components/WorkCard";
import WorkData from "./Data/WorkData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Work() {
    const gridRef = useRef(null);
    useRevealOnScroll(gridRef, ".work-card", true);

    return (
        <section id="projects" aria-labelledby="projects-title">
            <div className="work-container">
                <div className="work-header">
                    <h2 id="projects-title" className="work-title text">MY PROJECTS</h2>
                    <p className="work-desc text">Projects I've worked on so far.</p>
                    <p className="work-hint">Scroll to browse the project rail.</p>
                </div>
                <ul className="work-grid" ref={gridRef} aria-label="Portfolio projects">
                    {WorkData.map(project => (
                        <WorkCard key={project.title} {...project} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
