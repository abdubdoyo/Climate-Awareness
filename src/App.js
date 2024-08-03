import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/navbar';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #adc178;
  color: #004d40;
  padding: 20px;
  font-family: 'Arial, sans-serif';
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
