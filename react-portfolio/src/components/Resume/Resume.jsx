import React from "react";

import styles from "./Resume.module.css";

export const Resume = () => {
    const resumeUrl = "react-portfolio/assets/resume/WeberResume12-26-24.pdf";
    return (
        <div className={styles.container} id="resume">
            <h1 className={styles.title}>Resume</h1>
            <iframe
                src={resumeUrl}
                title="Resume PDF"
                className={styles.viewer}
            ></iframe>
        </div>
    );
};