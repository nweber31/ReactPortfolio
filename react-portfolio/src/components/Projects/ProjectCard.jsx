import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, demo, source } }) => {
    const imagePath = new URL(`../../assets/projects/${imageSrc}`, import.meta.url).href;
    return (
        <div className={styles.container}>
            <img src={imagePath} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo Link</a>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>
    );
};