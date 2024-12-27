import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nathan</h1>
                <p className={styles.description}> I recently graduated from Georgia Tech with a Bachelor's degree in Computational Media and a minor in Music Technology. I have a passion for videogames and music, and enjoy working together to find solutions to problems.</p>
                <a href="mailto:nweber31@gatech.edu" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src="/assets/hero/gradHeadshot.png" alt="Headshot" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};