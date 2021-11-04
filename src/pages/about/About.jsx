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
                        <p>Hi! I am a world traveller turned Web Developer.</p>

                        <p>2020 presented me a unique opportunity to re-invent my career and after wonderful years in tourism, I took a 1-year break and used this time to learn something new - Full Stack Web Development (MERN) at <a href="https://digitalcareerinstitute.org/" target="_blank" rel="noopener noreferrer"><abbr title="Digital Career Institute gGmbH">DCI</abbr></a>.</p>

                        <p>I've discovered my passion for coding - I enjoy finding solutions, improving and optimizing. I see coding as a fun puzzle solving with different ways of putting pieces together in order to get the whole picture.
                        </p>

                        <p>I am grateful to tourism for training my communication skills and now in web development I am uncovering and applying my full potential. </p>
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