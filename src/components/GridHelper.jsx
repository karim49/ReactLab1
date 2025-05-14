import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GridHelper = ({ numCols = 12, numRows = 6 }) => {
  return (
    <Container
      fluid
      style={{
        position: 'relative', // Position the grid relative to the container
        height: '100%', // Ensure the grid takes up the full height of the container
      }}
    >
      {/* Overlay grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none', // Ensure the grid doesn't block interactions with the content
          zIndex: 10, // Make sure grid is above the content
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
          backgroundSize: `${100 / numCols}% ${100 / numRows}%`, // Defines the grid's density
        }}
      />
      
      {/* Content */}
      <Row>
        <Col md={12}>
          <h1>Your Content Goes Here</h1>
          <p>This is a simple container with a dashed grid overlay.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default GridHelper;
