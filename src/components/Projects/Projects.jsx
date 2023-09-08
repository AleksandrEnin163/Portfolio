import React from 'react'
import s from './Projects.module.css'

function Projects() {
  return (
    <section id='projects' className={s.projects}>
        <div className={s.container}>
            <div className={s.projects_content}>
                <p>portfolio</p>
                <h3>Web Development Made Personal 🤝</h3>
                <div className={s.projects_grid}></div>
            </div>
        </div>
    </section>
  )
}

export default Projects