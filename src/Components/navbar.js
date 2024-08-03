// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dde5b6;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled(Link)`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #3a5a40;
  color: #3a5a40;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #3a5a40;
    color: white;
  }
`;

const SmallButton = styled(NavButton)`
  padding: 5px 10px;
  font-size: 0.8rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer className="navbar bg-body-">
      <form className="container-fluid justify-content-start">
        <NavButton to="/">HOME</NavButton>
        <SmallButton to="/">Carbon footprint Calculator</SmallButton>
      </form>
    </NavbarContainer>
  );
};

export default Navbar;
