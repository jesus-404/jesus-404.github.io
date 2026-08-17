import React, { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import ExpCard from "./Sub_components/ExpCard";
import ExpData from "./Data/ExpData";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Experiences() {
    const [expanded, setExpanded] = useState(false);
    const gridRef = useRef(null);
    useRevealOnScroll(gridRef, ".exp-card", false, expanded);

    return (
        <section id="exp" aria-labelledby="exp-title">
            <div className="exp-container">
                <div className="exp-header">
                    <h2 id="exp-title" className="exp-title text">EXPERIENCE, EDUCATION & CREDENTIALS</h2>
                    <p className="exp-desc text">Hands-on experience and continued development toward Network Engineering.</p>
                </div>
                <ol id="experience-grid" className="exp-grid" ref={gridRef}>
                    {ExpData.map((experience, index) => {
                        const lastVisibleIndex = expanded ? ExpData.length - 1 : 2;
                        return (
                            <ExpCard
                                key={experience.title}
                                {...experience}
                                hidden={!expanded && index > lastVisibleIndex}
                                showConnector={index < lastVisibleIndex}
                            />
                        );
                    })}
                </ol>
                <button
                    className={`expand-btn expand-exp-btn${expanded ? " active" : ""}`}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls="experience-grid"
                    onClick={() => setExpanded(value => !value)}
                >
                    <span>{expanded ? "SHOW LESS" : "SHOW ALL EXPERIENCES"}</span>
                    <span aria-hidden="true"><IoChevronDownOutline /></span>
                </button>
            </div>
        </section>
    );
}
