import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #dde5b6;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  background-color: #dde5b6;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: transparent;
  color: #132a13;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #132a13;
  }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const scrollToQuestionnaire = () => {
    document.getElementById('questionnaire-section').scrollIntoView({ behavior: 'smooth' });
  };
  const goToLogIn = () => {
    navigate('/login');
  };
  
  return (
    <Nav className="navbar bg-body-dde5b6">
      <Form className="container-fluid justify-content-start">
        <Button className="btn btn-outline-success me-2" type="button" onClick={scrollToQuestionnaire}>
          Calculate Your Footprint
        </Button>
        <Button className="btn btn-outline-success me-2" type="button" onClick={goToLogIn}>
          Log in
        </Button>
      </Form>
    </Nav>
  );
};

export default Navbar;
