import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [form, setFormData] = useState({
    address: "",
    blockId: "",
    blockName: "",
    contactNumber: "",
    designation: "",
    districtId: "",
    districtName: "",
    emailId: "",
    logo: "",
    role: "",
    schoolName: "",
    since: "",
    stateId: "",
    stateName: "",
    superadminId: "",
    udiseCode: "",
    userCategory: "",
    userName: "",
    usertype: "",
    website: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...form, [name]: value });
  };

  const postData = async (formData) => {
    try {
      const response = await axios.post(
        "https://thinkzone.in.net/erp/createUser",
        formData
      );
      alert("user created succesfully");
      navigate("/");
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const register = (e) => {
    e.preventDefault();
    postData(form);
   
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="mb-3">Register</h2>
          <Form onSubmit={register}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="emailId"
                    value={form.emailId}
                    onChange={handleInputValue}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="userName"
                    value={form.userName}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formSuperadminId">
                  <Form.Label>Superadmin ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter superadmin ID"
                    name="superadminId"
                    value={form.superadminId}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    value={form.address}
                    onChange={handleInputValue}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBlockId">
                  <Form.Label>Block ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter block ID"
                    name="blockId"
                    value={form.blockId}
                    onChange={handleInputValue}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBlockName">
                  <Form.Label>Block Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter block name"
                    name="blockName"
                    value={form.blockName}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formContactNumber">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter contact number"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formDesignation">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter designation"
                    name="designation"
                    value={form.designation}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formDistrictId">
                  <Form.Label>District ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter district ID"
                    name="districtId"
                    value={form.districtId}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formDistrictName">
                  <Form.Label>District Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter district name"
                    name="districtName"
                    value={form.districtName}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLogo">
                  <Form.Label>Logo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter logo URL"
                    name="logo"
                    value={form.logo}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter role"
                    name="role"
                    value={form.role}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formSchoolName">
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter school name"
                    name="schoolName"
                    value={form.schoolName}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formSince">
                  <Form.Label>Since</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter since"
                    name="since"
                    value={form.since}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formStateId">
                  <Form.Label>State ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state ID"
                    name="stateId"
                    value={form.stateId}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formStateName">
                  <Form.Label>State Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state name"
                    name="stateName"
                    value={form.stateName}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formUdiseCode">
                  <Form.Label>Udise Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter udise code"
                    name="udiseCode"
                    value={form.udiseCode}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formUserCategory">
                  <Form.Label>User Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter user category"
                    name="userCategory"
                    value={form.userCategory}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formUsertype">
                  <Form.Label>Usertype</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter usertype"
                    name="usertype"
                    value={form.usertype}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formWebsite">
                  <Form.Label>Website</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter website"
                    name="website"
                    value={form.website}
                    onChange={handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={handleInputValue}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content mb-3">
                <Button type="submit" variant="primary">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
