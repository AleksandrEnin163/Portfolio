import React from 'react'
import s from './Projects.module.css'
import {projects_data} from '../../data/data'
import ProjectItem from '../ProjectItem/ProjectItem'

function Projects() {
  return (
    <section id='projects' className={s.projects}>
        <div className={s.container}>
            <div className={s.projects_content}>
                <p>portfolio</p>
                <h3>Web Development Made Personal 🤝</h3>
                <div className={s.projects_grid}>
                  {projects_data.map(elem => <ProjectItem key={elem.id} name={elem.name} description={elem.description} link_git={elem.link_git} link_demo={elem.link_demo} image={elem.image} reversed={elem.reversed}/>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects