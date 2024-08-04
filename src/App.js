import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HtmlContent from './component/login'; // Your login component
import SignUp from './component/signup'; // Your sign-up component
import Homepage from './component/Homepage';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #dde5b6;
  color: #004d40;
  padding: 20px;
  font-family: 'Arial, sans-serif';
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');


  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/login" element={<HtmlContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </Container>

    </Router>
  );
}

export default App;
