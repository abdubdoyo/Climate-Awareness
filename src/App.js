import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HtmlContent from './component/login'; // Your login component
import SignUp from './component/signup'; // Your sign-up component
import Homepage from './component/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<HtmlContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
