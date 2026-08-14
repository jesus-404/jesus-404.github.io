import React from "react";

export default function SkillCard({ img, icon: Icon, color, offsetY, scale, title }) {
    const cardStyle = {
        ...(color ? { "--skill-color": color } : {}),
        ...(offsetY ? { "--skill-logo-offset-y": offsetY } : {}),
        ...(scale ? { "--skill-logo-scale": scale } : {})
    };

    return (
        <li className="skill-card" style={Object.keys(cardStyle).length ? cardStyle : undefined}>
            <span className="skill-mark" aria-hidden="true">
                {img ? (
                    <img src={img} alt="" width="68" height="68" loading="lazy" decoding="async" />
                ) : (
                    <Icon className="skill-icon" />
                )}
            </span>
            <p>{title}</p>
        </li>
    );
}
