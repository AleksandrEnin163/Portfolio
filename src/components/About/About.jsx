import React from 'react'
import s from './About.module.css'
import working_emoji from '../../assets/working_emoji.png'
import main_img_about from '../../assets/main_img_about.webp'
import frontend_img from '../../assets/frontend_img.svg'

function About() {
  return (
    <section className={s.about} id='about'>
        <div className={s.container}>
            <div className={s.about_content}>
                <div className={s.img_side}>
                    <img src={working_emoji} alt="working_emoji" className={s.work_emoji} />
                    <img src={main_img_about} alt="main_img_about" className={s.img_side_main_img} />
                    <span>
                        <img src={frontend_img} alt='frontend_img' />
                    </span>
                </div>
                <div className={s.text_side}>
                    <h3>About me</h3>
                    <h4>A dedicated Front-end Developer <br/> based in Berlin, Germany 📍</h4>
                    <p>As a Junior Front-End Developer, I have a strong skill set encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in creating and maintaining responsive websites that provide seamless user experiences. My proficiency lies in designing interactive, captivating interfaces by producing well-structured and efficient code and leveraging the latest development tools and methodologies. Additionally, I am a collaborative team member who excels in working with diverse teams to deliver exceptional web applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About