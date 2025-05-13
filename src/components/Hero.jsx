import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './Hero.module.css';

const Hero = () => {
    return (
        // <div className="hero-section text-black d-flex align-items-center">
        <div className={styles.herosection}>
            <Container>
                <Row>
                    <Col md={6}>
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
