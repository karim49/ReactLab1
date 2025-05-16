import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './css/Hero.module.css';
import GridHelper from './GridHelper';
import heroImage from "../assets/images/hero1.png";
const Hero = () => {
    return (
        // <div className="hero-section text-black d-flex align-items-center">
        // <div className={styles.herosection}>
        <>
            <Container className={`${styles.herosection} `}>
                <img src={heroImage} alt="hero" className={`${styles.heroBg}`} />
                <Row className='justify-content-start'>
                    <Col className='d-flex flex-column justify-content-top align-items-center text-center mt-4'>
                        <h1>Katie Reed</h1>
                        <h4>Web Developer & Designer</h4>
                        <Button variant="outline-light" className="mt-3">Contact Me</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Hero;
