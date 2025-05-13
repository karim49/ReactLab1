import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Portfolio.module.css';

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
        <section className={`${styles['portfolio-section']} py-5`}>

            <Container>
                <h2 className="text-center mb-5 portfolio-title">Portfolio</h2>
                <Row>
                    {portfolioItems.map((item, index) => (
                        <Col key={index} md={4} className="mb-4 d-flex justify-content-center">
<Card className={`${styles.card} ${index % 2 === 0 ? styles.grey : styles.havan}`}>
                                <Card.Body>
                                    <Card.Text className="text-center">{item}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;
