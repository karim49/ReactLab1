import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './CSS/Footer.module.css';

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container className={`${styles['footer-section']} text-light py-2 `}>
            <Row >
                <Col md={3} className="d-flex flex-column justify-content-center align-items-center text-center flex-wrap">
                    <h5>GET IN TOUCH</h5>
                    <p className="mb-1"><FaEnvelope className="me-2" />kr12@hotmail.com</p>
                    <p className="mb-0"><FaPhoneAlt className="me-2" />717-555-1234</p>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
                    <Button variant="outline-light">Contact Me</Button>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center text-center flex-wrap">
                    <div className="social-icons">
                        <FaLinkedin className="me-3" />
                        <FaFacebook className="me-3" />
                        <FaTwitter />
                    </div>
                    <div>
                        <small>Copyright © 2019 KR</small>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
