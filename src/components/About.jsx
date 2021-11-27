import React from "react";
import { Container } from "react-bootstrap";

export default function About() {

    const paragraph = {
        fontFamily: "Roboto Condensed, sans-serif",
	    color: "#040e27",
        letterSpacing: "2px",
    }

    return (
        <Container fluid className="my-4 px-5">
            <h1 className="text-center mb-4" id="about">About Me</h1>
            <p className="text-center" style={paragraph}>Helo my name Sinta Afria Ningsih. I am a fresh graduate majoring in physics. I have work experience in proggramming language. I have exprience as reasearch assistant at Riau University photonic laboratory developing sortation system using python. I also joined fullstack developer course. Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Sequi molestiae, excepturi nesciunt distinctio praesentium cumque similique dolores libero deleniti dolorum est vitae dolorem eveniet rem possimus voluptate voluptas nam, debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eaque odit, blanditiis expedita ex, adipisci obcaecati nulla cumque veritatis quia placeat ut exercitationem facere officia, sit! Sunt doloribus illum corporis.
            </p>
        </Container>
    )
}