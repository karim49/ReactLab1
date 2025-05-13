import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Footer.module.css';

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={`${styles['footer-section']} text-light py-4`}>
            <Container>
                <Row className="mb-4">
                    <Col md={3}>
                        <h5>GET IN TOUCH</h5>
                        <p><FaEnvelope className="me-2" />kr12@hotmail.com</p>
                        <p><FaPhoneAlt className="me-2" />717-555-1234</p>
                    </Col>
                    <Col md={6} className="text-md-center text-center">
                        <Button variant="outline-light">Contact Me</Button>
                    </Col>
                </Row>
                <Row>
                    <Col  className="d-flex flex-column align-items-center flex-wrap">
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
        </footer>
    );
};

export default Footer;
