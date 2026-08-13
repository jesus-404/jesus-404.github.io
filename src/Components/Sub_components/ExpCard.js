import React from "react";

export default function ExpCard({ img, link, title, date, subTitle, desc, hidden, showConnector }) {
    return (
        <li className={`exp-card${showConnector ? " has-connector" : ""}`} hidden={hidden}>
            <img src={img} alt="" className="exp-image" width="400" height="340" loading="lazy" decoding="async" />
            <div className="card-text1">
                <h3><a href={link} target="_blank" rel="noreferrer">{title}<span className="sr-only"> organization website</span></a></h3>
                <p>{date}</p>
            </div>
            <span className="dot" aria-hidden="true"></span>
            <div className="card-text2">
                <h4>{subTitle}</h4>
                <p>{desc}</p>
            </div>
        </li>
    );
}
