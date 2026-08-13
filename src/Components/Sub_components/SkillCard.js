import React from "react";

export default function SkillCard({ img, title }) {
    return (
        <li className="skill-card">
            <img src={img} alt="" width="400" height="400" loading="lazy" decoding="async" />
            <p>{title}</p>
        </li>
    );
}
