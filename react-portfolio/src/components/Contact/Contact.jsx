import React from "react";

import styles from './Contact.module.css';

import emailIcon from "/assets/contact/emailIcon.png";
import linkedinIcon from "/assets/contact/linkedinIcon.png";
import gitHubIcon from "/assets/contact/githubIcon.png";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="Email Icon" />
                    <a href="mailto:nweber31@gatech.edu">nweber31@gatech.edu</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/nathanweber31">linkedin.com/in/nathanweber31/</a>
                </li>
                <li className={styles.link}>
                    <img src={gitHubIcon} alt="GitHub Icon" />
                    <a href="https://www.github.com/nweber31">github.com/nweber31</a>
                </li>
            </ul>
        </footer>
    );
};