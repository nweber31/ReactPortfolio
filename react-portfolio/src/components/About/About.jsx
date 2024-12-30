import React from "react";

import styles from "./About.module.css";

import cursorIcon from "/assets/about/cursorIconNew1.png";
import gameIcon from "/assets/about/gameIcon1.png";
import musicIcon from "/assets/about/musicIcon1.png";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={cursorIcon} alt="CursorIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>
                                I am a software developer with experience in building responsive and optimized projects.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={gameIcon} alt="GameIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Game Developer</h3>
                            <p>
                                I am a game developer with experience working in engines like Unity and Godot.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={musicIcon} alt="MusicIcon" />
                        <div className={styles.aboutItemText}>
                            <h3>Musician</h3>
                            <p>
                                I am a musician with experience creating audio and music for games in FL Studio and Ableton.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};