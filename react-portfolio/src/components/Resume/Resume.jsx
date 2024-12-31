import React from "react";

import styles from "./Resume.module.css";

import resume from "/assets/resume/UpdatedResume-12-31-24.pdf";

export const Resume = () => {
    const resumeUrl = "/assets/resume/UpdatedResume-12-31-24.pdf";
    return (
        <div className={styles.container} id="resume">
            <h1 className={styles.title}>Resume</h1>
            <iframe
                src={resume}
                title="Resume PDF"
                className={styles.viewer}
            ></iframe>
        </div>
    );
};