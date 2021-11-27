import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import profil from "./img/profil.jpg"


export default function Home() {
    const imgStyle = {
        borderRadius: "50%",
        width: "250px",
        height: "auto",
        padding: "10px",
        border: "2px solid #fff",
    };

    const containerStyle = {
        paddingTop: "60px",
        color: "#040e27",
    };

    return (
        <Container fluid style={containerStyle} className="px-5" id="home">
            <Row className="py-4">
                {/* <Col className="my-3 text-center"> */}
                {/* <Image style={imgStyle} src={profil} roundedCircle /> */}
                {/* </Col> */}
                <Col className="my-auto mx-auto align-middle">
                    <Container>
                        <h1 className="text-center mt-5">Sinta Afria Ningsih</h1>
                        <h2 className="text-center mb-5">Full Stack Developer</h2>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
