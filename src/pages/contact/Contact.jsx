import React from 'react'

// styling
import "./Contact.scss"

function Contact() {

    return (
        <div className="container-contact">

            <h2>Contact Me</h2>

            <form className="contact-form" target="_blank" action="https://formsubmit.co/24aaa28c0aede191932dc7ad1afd6434" method="POST">

                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label>

                    <textarea
                        cols="60"
                        rows="10"
                        placeholder="Your Message"
                        name="message"
                        id="message"
                        required
                    ></textarea>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="submit-btn"
                />
            </form>
        </div>
    )
}

export default Contact
