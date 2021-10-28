import React from 'react'

// styling
import "./Projects.scss"

// images
import cinefilo from "../../images/cinefilo.png"
import messageboard from "../../images/messageboard.png"
import grocerylist from "../../images/grocerylist.png"
import randomquote from "../../images/randomquote.jpg"
import nature from "../../images/nature.png"
// import cartoon from "../../images/cartoon.png"
import bingo from "../../images/bingo.jpg"

import { FaGithub } from 'react-icons/fa'

function Projects() {


    return (
        <div className="container-projects">
            <h2>My Recent Projects</h2>

            <div className="projects">
                <div className="box">

                    <div><img src={cinefilo} alt="Cinefilo movie app" /></div>

                    <h4>Cinefilo</h4>

                    <p>A social movie website, allowing users to make and compare lists with friends</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/good-movies-app" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://good-movies-project.herokuapp.com/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>

                <div className="box">
                    <div><img src={messageboard} alt="Message Board" /></div>

                    <h4>Online Message Board</h4>

                    <p>An online MessageBoard with 3 Channels - Feedback, Questions, Suggestions</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/full-stack-messagboard" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://online-message-board.herokuapp.com/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>

                <div className="box">
                    <div><img src={bingo} alt="Bingo" /></div>

                    <h4>Zoom Bingo Game</h4>

                    <p>Make your Zoom call more entertaining!</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/bingo-game-react" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://zoom-bingo-game.herokuapp.com" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>

                <div className="box">
                    <div><img src={grocerylist} alt="grocery list app" /></div>

                    <h4>Grocery Shopping List</h4>

                    <p>A simple neat application for creating a shopping list</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/grocery-shopping-list" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://grocery-shopping-list-creator.herokuapp.com/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>

                <div className="box">
                    <div><img src={randomquote} alt="Random Quote" /></div>

                    <h4>Random Quote Generator</h4>

                    <p>Get a new inspirational quote every day!</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/Random_Quote" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://alina-de.github.io/Random_Quote/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>


                <div className="box">
                    <div><img src={nature} alt="Amazing Nature" /></div>

                    <h4>Responsive SPA</h4>

                    <p>An example of a responsive SPA with Bootstrap</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/Portfolio_Amazing_Nature" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://alina-de.github.io/Portfolio_Amazing_Nature/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div>

                {/* <div className="box">
                    <div><img src={cartoon} alt="Cartoon" /></div>

                    <h4>Funny Cartoon :)</h4>

                    <p>Some fun with icons and animation</p>

                    <div className="card-links">
                        <a href="https://github.com/Alina-DE/Nature_Cartoon" target="_blank" rel="noreferrer"><FaGithub /></a>

                        <a href="https://alina-de.github.io/Nature_Cartoon/" target="_blank" rel="noreferrer">View Online</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects