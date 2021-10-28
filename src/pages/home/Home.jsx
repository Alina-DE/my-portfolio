import axios from 'axios';
import React, { useEffect, useState } from 'react';

import alina_photo from '../../images/profile-xs-bw.png';

// styling
import "./Home.scss"

function Home() {
    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    const getQuote = async () => {
        let url = "https://type.fit/api/quotes";

        await axios(url)
            .then(response => {

                let randomIndex = Math.floor(Math.random() * response.data.length)

                if (response.data[randomIndex].author !== "Donald Trump") {
                    setAuthor(response.data[randomIndex].author);
                    setQuote(response.data[randomIndex].text);

                } else {
                    setAuthor(response.data[randomIndex - 1].author);
                    setQuote(response.data[randomIndex - 1].text);
                }
            })
            .catch((error) => {
                console.log("Something went wrong...", error.response);
            })
    }

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <div className="container-home">

            <div className="home-all">

                <img src={alina_photo} alt="profile" />

                <div>
                    <h1>MOIN!</h1>

                    <h1>I'm Alina <span>Reinalt</span></h1>
                    <h4>Full Stack Web Developer</h4>
                    <p>World Traveller</p>

                    <div>Hamburg, Germany</div>
                </div>

            </div>

            <div className="quote">
                <div>{quote}</div>

                <div>{author}</div>
            </div>


        </div>
    )
}

export default Home
