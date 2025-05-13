import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import styles from './Skills.module.css';

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

    <section className={`${styles['skills-section']} py-5 text-light`}>
      <Container>
        <h2 className="skills-title text-center mb-4">Skills</h2>
        <p className="skills-desc text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
        <Row>
          <Col md={4}>
            <h5 className={`${styles['focus-title']} mb-3`}>MY FOCUS</h5>

            <ul className={styles['focus-list']}>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
            </ul>
          </Col>
          <Col md={8}>
            {skillLevels.map((skill, idx) => (
              <div className="mb-3" key={idx}>
                <label>{skill.label}</label>
                <ProgressBar
                  now={skill.value}
                  label={`${skill.value}%`}
                  style={{
                    backgroundColor: '#09090999', // Light gray for background
                    height: '20px', // Set the height of the bar
                  }}
                  variant="info" // Use this or customize with your own styles
                />              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
