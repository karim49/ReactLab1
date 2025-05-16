import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './css/AboutMe.module.css';

const AboutMe = () =>
{
    return (
        <Container className={`${styles.aboutMe} py-5`}>
            <Row className="align-items-top">
                <Col md={5}>
                    <h2 >About me</h2>
                </Col>
                <Col md={7}>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <Button variant="dark" className="mt-3">Download Resume</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;
