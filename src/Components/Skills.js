import React, { useMemo, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import SkillCard from "./Sub_components/SkillCard";
import skillsData from "./Data/SkillsData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const visibleGroups = ["Networking & Infrastructure", "CCNA & Networking Development", "Credentials & Development"];

export default function Skills() {
    const [expanded, setExpanded] = useState(false);
    const gridRef = useRef(null);
    useRevealOnScroll(gridRef, ".skill-card", false, expanded);

    const groupedSkills = useMemo(() => skillsData.reduce((groups, skill) => {
        if (skill.hidden) return groups;
        if (!groups[skill.category]) groups[skill.category] = [];
        groups[skill.category].push(skill);
        return groups;
    }, {}), []);

    const renderGroup = (category, skills) => (
        <section className="skills-group" key={category} aria-labelledby={`skills-${category.toLowerCase().replace(/\s+/g, "-")}`}>
            <h3 id={`skills-${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</h3>
            <ul className="skill-list">
                {skills.map(skill => <SkillCard key={skill.title} {...skill} />)}
            </ul>
        </section>
    );

    return (
        <section id="skills" aria-labelledby="skills-title">
            <div className="skills-container">
                <div className="skills-header">
                    <h2 id="skills-title" className="skills-title text">MY SKILLS</h2>
                    <p className="skills-desc text">Network operations, infrastructure, security, systems, and supporting technologies.</p>
                </div>
                <div id="skills-grid" className="skills-grid" ref={gridRef}>
                    {Object.entries(groupedSkills).map(([category, skills]) => (
                        <div key={category} hidden={!expanded && !visibleGroups.includes(category)}>
                            {renderGroup(category, skills)}
                        </div>
                    ))}
                </div>
                <button
                    className={`expand-btn${expanded ? " active" : ""}`}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls="skills-grid"
                    onClick={() => setExpanded(value => !value)}
                >
                    <span>{expanded ? "SHOW LESS" : "SHOW ALL SKILLS"}</span>
                    <span aria-hidden="true"><IoChevronDownOutline /></span>
                </button>
            </div>
        </section>
    );
}
