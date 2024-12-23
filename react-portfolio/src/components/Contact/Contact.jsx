import React from "react";

import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
                    <a href="mailto:nweber31@gatech.edu">nweber31@gatech.edu</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/nathanweber31">linkedin.com/in/nathanweber31/</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/contact/githubIcon.png" alt="GitHub Icon" />
                    <a href="https://www.github.com/nweber31">github.com/nweber31</a>
                </li>
            </ul>
        </footer>
    );
};