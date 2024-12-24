import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
    const emailToFind = localStorage.getItem('user');
  const userName =  emailToFind?.split('@')[0];
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome To ThinkZone</h1>
          <p>Hi I am {userName}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
