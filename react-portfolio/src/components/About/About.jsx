import React from "react";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src="/assets/about/cursorIcon.png" alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>
                                I am a software developer
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src="/assets/about/serverIcon.png" alt="ServerIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Game Developer</h3>
                            <p>
                                I am a game developer
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src="/assets/about/uiIcon.png" alt="uiIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Musician</h3>
                            <p>
                                I am a usician
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};