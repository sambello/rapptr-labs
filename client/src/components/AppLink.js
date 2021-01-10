import React from "react";

export default function AppLink({img, appName, link}) {
    return (
        <div className="applications">
            <a href={link}>
                <img
                    src={img}
                    alt={appName}
                />
                <h5>{appName}</h5>
            </a>
        </div>
    )
}