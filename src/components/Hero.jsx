import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './css/Hero.module.css';
import GridHelper from './GridHelper';

const Hero = () =>
{
    return (
        // <div className="hero-section text-black d-flex align-items-center">
        // <div className={styles.herosection}>
        <div >
            <Container className={styles.herosection}>
                <Row>
                    <Col md={3}>
                        <h1>Katie Reed</h1>
                        <h4>Web Developer & Designer</h4>
                        <Button variant="outline-light" className="mt-3">Contact Me</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
