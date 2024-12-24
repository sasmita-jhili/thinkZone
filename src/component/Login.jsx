import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });
const [rsedata,setrsedata] =useState([])
  const navigate = useNavigate();

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginApi = async (user) => {
    try {
      const response = await axios.post(
        "https://thinkzone.in.net/erp/authUser",
        user
      );
      if(response.status === 200){
        localStorage.setItem('login',true);
        localStorage.setItem('user',response.data.resData[0].userName);     
        alert("user login succesfully")
        navigate("/home")
        }
        
      setrsedata(response.status)
      console.log("API Response:", response.status);
    } catch (error) {
      console.error("Error posting data:", error);
      alert(`${error.message}`)
    }
  };

  const LoggedIn = (e) => {
    e.preventDefault();
    console.log("Form Data:", user);
    loginApi(user);
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img
            src="./images/login1.jpg"
            alt="Login Illustration"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Login</h2>
          <Form onSubmit={LoggedIn}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userId"
                value={user.userId}
                onChange={handleInputValue}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleInputValue}
                required
              />
            </Form.Group>
            <Button type="submit" className="w-100 btn-primary">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
