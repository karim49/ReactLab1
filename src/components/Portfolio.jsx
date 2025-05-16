import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './css/Portfolio.module.css';

const portfolioItems = [
    'WEB DESIGN',
    'MOBILE DESIGN',
    'LOGO DESIGN',
    'WEB APPLICATION DEVELOPMENT',
    'MOBILE APPLICATION DEVELOPMENT',
    'PWA DEVELOPMENT',
];

const Portfolio = () => {
    return (
        <Container className={`${styles.portfolioSection} py-5`}>
            <h2 className="text-left mb-5 portfolio-title">Portfolio</h2>
            <Row>
                {portfolioItems.map((item, index) => (
                    <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
                        <Card className={`${styles.card} ${index % 2 === 0 ? styles.light : styles.dark} `}>
                            <Card.Body  className="d-flex align-items-center justify-content-center">
                                <Card.Text className={`${index < 3 ? styles.customUnderline :""}`}>{item}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Portfolio;
