import React from 'react'

import alina_photo from '../../images/profile-xs.png';

// styling
import "./About.scss"

function About() {



    return (
        <div className="container-about">

            <h2>About Me</h2>

            <div className="about-all">

                <div className="about-top">

                    <aside>
                        <img src={alina_photo} alt="profile" />
                        <h1>Alina <span>Reinalt</span></h1>
                        <h4>Full Stack Web Developer</h4>
                        <p>Hamburg, Germany</p>
                    </aside>

                    <main>
                        <p>I am a world traveller turned Web Developer.</p>

                        <p>Recently I graduated from a 1-year full-time intensive training on Full Stack Web Development (MERN).</p>

                        <p>I am passionate about coding, finding solutions, improving and optimizing. From my previous work in tourism I am bringing flexibility, communication skills, solid problem-solving skills and an experience of working in an international environment.</p>

                        <p>I'm seeking now a web developer position to apply my skills and knowledge, challenge myself and deliver solution-oriented approaches.</p>
                    </main>
                </div>

                <section>
                    <h3>My Skills</h3>

                    <div className="skills">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>SCSS</div>
                        <div>Bootstrap</div>
                        <div>JavaScript</div>
                        <div>ReactJS</div>

                    </div>

                    <div className="skills">
                        <div>Node.js</div>
                        <div>Express.js</div>
                        <div>MongoDB</div>
                        <div>REST API</div>
                        <div>Git</div>
                        <div>GitHub</div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default About
