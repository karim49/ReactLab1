import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import styles from './css/Skills.module.css';

const skillLevels = [
  { label: 'HTML', value: 90 },
  { label: 'CSS', value: 85 },
  { label: 'JavaScript', value: 80 },
  { label: 'React', value: 75 },
  { label: 'Photoshop', value: 70 },
  { label: 'Adobe XD', value: 65 },
  { label: 'Node.js', value: 60 },
  { label: 'WordPress', value: 50 },
];

const Skills = () => {
  return (

    <Container className={`${styles['skillsSection']} py-5 text-light`}>
      <Row>
        <Col md={12}>

          <h2 className="skills-title text-center mb-4">Skills</h2>
          <p className="skills-desc text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="d-flex flex-column justify-content-center align-items-center text-center" >
          <h5 className={`${styles.focusTitle} mt-6`}>MY FOCUS</h5>
          <ul className={`${styles.focusList} `}>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
          </ul>
        </Col>
        <Col md={8}>
          {skillLevels.map((skill, idx) => (
            <div className="mb-3" key={idx}>
              <div className={styles.skillbar}>
                <span className={styles.label}>{skill.label}</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Col>

      </Row>
    </Container>
  );
};

export default Skills;
