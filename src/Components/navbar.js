import React from 'react';
import styled from 'styled-components';

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
  border: none;px
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #132a13;
  }
`;

const navbar = () => {
  const scrollToQuestionnaire = () => {
    document.getElementById('questionnaire-section').scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <Nav className="navbar bg-body-dde5b6">
      <Form className="container-fluid justify-content-start">
        <Button className="btn btn-outline-success me-2" type="button" onClick={scrollToQuestionnaire}>
          Calculate Your Footprint
        </Button>
      </Form>
    </Nav>
  );

};

export default navbar;
