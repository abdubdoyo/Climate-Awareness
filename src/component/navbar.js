
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
  color: #dde5b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #132a13;
  }
`;

const Navbar = () => {
  const scrollToQuestionnaire = () => {
    document.getElementById('questionnaire-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      <Form>
        <Button type="button" onClick={scrollToQuestionnaire}>
          Calculate Your Footprint
        </Button>
      </Form>
    </Nav>
  );
};

export default Navbar;


