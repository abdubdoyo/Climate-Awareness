import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HtmlContent from './component/login'; // Your login component
import SignUp from './component/signup'; // Your sign-up component
import Homepage from './component/Homepage';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #adc178;
  color: #004d40;
  padding: 20px;
  font-family: 'Arial, sans-serif';
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };
<<<<<<< HEAD
  
=======
>>>>>>> c5e3bf32ff1859b0f50bd8a4221ddb25036f901d

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
<<<<<<< HEAD
          <Route path="/login" element={<HtmlContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={isAuthenticated ? <Homepage onLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
      
=======
          <Route path="/" element={isAuthenticated ? <Homepage onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp onSignup={handleLogin} />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <HtmlContent onLogin={handleLogin} />} />
        
        </Routes>
      </Container>
>>>>>>> c5e3bf32ff1859b0f50bd8a4221ddb25036f901d
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> c5e3bf32ff1859b0f50bd8a4221ddb25036f901d
