import React from "react";

export default function ExpCard({ img, icon: Icon, brandFilter, brandScale, link, linkLabel = "website", title, date, subTitle, desc, hidden, showConnector }) {
    const brandStyle = {
        ...(brandFilter ? { "--exp-brand-filter": brandFilter } : {}),
        ...(brandScale ? { "--exp-brand-scale": brandScale } : {})
    };

    return (
        <li className={`exp-card${showConnector ? " has-connector" : ""}`} hidden={hidden}>
            {img ? (
                <img src={img} alt="" className="exp-image" style={Object.keys(brandStyle).length ? brandStyle : undefined} width="400" height="340" loading="lazy" decoding="async" />
            ) : (
                <Icon className="exp-image" style={Object.keys(brandStyle).length ? brandStyle : undefined} aria-hidden="true" />
            )}
            <div className="card-text1">
                <h3>
                    {link ? (
                        <a href={link} target="_blank" rel="noreferrer">{title}<span className="sr-only"> {linkLabel}</span></a>
                    ) : title}
                </h3>
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
