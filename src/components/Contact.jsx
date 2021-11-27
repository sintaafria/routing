import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function Contact () {
    return(
        <div className="text-center mt-4" id="contact" >
            <h1 className="text-center">Contact Me</h1>
            <Card className="mx-auto my-4" style={{width: '18rem', border: 'none'}}>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Form>
                <Button variant="dark" type="submit" style={{backgroundColor: "#040e27", textAlign: "center"}}>Send</Button>
            </Card>
        </div>
        
    )
}