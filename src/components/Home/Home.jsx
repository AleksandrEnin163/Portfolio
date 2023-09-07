import React from 'react'
import s from './Home.module.css'
import waving from '../../assets/waving.png'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import scss from '../../assets/scss.svg'


function Home() {
  return (
    <section id='#home' className={s.hero}>
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.hero_main}>
                    <div className={s.hero_text}>
                        <h1>Front-End React Developer</h1>
                        <img src={waving} alt='waving' />
                        <p>Hi, I'm Aleksandr Enin. A passionate Front-end React Developer based in Berlin, Germany. 📍</p>
                        <span>
                            <a href="https://www.linkedin.com/in/aleksandrenin163/" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                            </a>
                            <a href="https://github.com/AleksandrEnin163" target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                        </span>
                    </div>
                    <div className={s.hero_image}></div>
                </div>
                <div className={s.skills}>
                    <p>Tech Stack</p>
                    <div className={s.logos}>
                        <ul>
                            <li><img src={html} alt="html" /></li>
                            <li><img src={css} alt="css" /></li>
                            <li><img src={js} alt="js" /></li>
                            <li><img src={react} alt="react" /></li>
                            <li><img src={tailwind} alt="tailwind" /></li>
                            <li><img src={scss} alt="scss" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home