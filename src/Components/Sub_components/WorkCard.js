import React from "react";

export default function WorkCard({ img, link, title, date, desc, altDesc }) {
    return (
        <li className="work-card-item">
            <a className="work-card" href={link} target="_blank" rel="noreferrer" aria-label={`${title} project, opens in a new tab`}>
                <figure className="work-media">
                    <img src={img} alt={altDesc} width="582" height="582" loading="lazy" decoding="async" />
                </figure>
                <span className="card-text">
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{desc}</p>
                    <span className="card-link" aria-hidden="true">Open project <span>↗</span></span>
                </span>
            </a>
        </li>
    );
}
