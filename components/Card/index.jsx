import React from 'react'
import styles from "../../styles/Card.module.css";

export const Card = () => {
    const images = ['https://designshack.net/wp-content/uploads/how-to-customize-a-website-mockup-template.jpg', 'https://designshack.net/wp-content/uploads/how-to-customize-a-website-mockup-template.jpg', 'https://designshack.net/wp-content/uploads/how-to-customize-a-website-mockup-template.jpg', 'https://goodmockups.com/wp-content/uploads/2018/10/Free-Responsive-Website-Showcase-Mockup-PSD.jpg', 'https://mockuptree.com/wp-content/uploads/2020/01/website-mockup-psd.jpg']
    return (
        <div className={styles.content}>
            {
                images.map((image, index) => (
                    <div key={index} className={styles.cardContainer}>
                        <img className={styles.cardImage} src={image} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
