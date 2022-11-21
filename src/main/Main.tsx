import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hello</span>
                    <h2>I am Margarita Privalko</h2>
                    <p>I'm a Front-End developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
};

export default Main;