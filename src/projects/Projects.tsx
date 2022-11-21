import React from 'react';
import styles from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <Project title={'First Project'} description={'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'}/>
                    <Project title={'Second Project'} description={'Lorem ipsum dolor sit amet adipiscing elit commodo ligula eget.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;