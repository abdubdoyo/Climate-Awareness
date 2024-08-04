import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HtmlContent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

<<<<<<< HEAD
=======
    // Handle login logic
    // Here, just simulate a successful login
>>>>>>> c5e3bf32ff1859b0f50bd8a4221ddb25036f901d
    onLogin();
  };

  return (
    <div>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/RPReplay_Final1722713006.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1></h1>
        <p></p>
      </div>
      <div className="login-container">
        <h2>L O G I N</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
          
          <button type="submit">LOGIN</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <p>Not a Member? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default HtmlContent;

