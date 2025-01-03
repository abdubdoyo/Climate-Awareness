import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/login'; // Your login component
import SignUp from './component/signup'; // Your sign-up component
import Homepage from './component/Homepage';
import styled from 'styled-components';
import Chatbot from './component/Chatbot';
import { Navigate } from 'react-router-dom';

const Container = styled.div`
  background-color: #dde5b6;
  color: #004d40;
  padding: 20px;
  font-family: 'Arial, sans-serif';
`;

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken');
  return authToken ? children : <Navigate to="/" />;
};

function App() {


  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Homepage/></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><Chatbot/></PrivateRoute>}/>
        </Routes>
      </Container>

    </Router>
  );
}

export default App;
