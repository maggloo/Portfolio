import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
           <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
               <h2 className={styles.title}>Contact Me</h2>
                <form className={styles.form}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                </form>
               <button className={styles.sendForm}>Send</button>
           </div>
        </div>
    );
};

export default Contacts;