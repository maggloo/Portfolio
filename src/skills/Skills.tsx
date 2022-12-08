import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet consectetuer elit aenean commodo ligula eget.'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;