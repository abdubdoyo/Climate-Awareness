import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    const data = await response.json();
    if (response.ok){
      localStorage.setItem('authToken', data.token);
      setMessage('Login successful:', data);
      navigate('/home');
    }else{
      const errorMessage = Array.isArray(data.errors)
      ? data.errors.join(', ')
      : 'Login failed due to unknown error';
      setMessage(`Login failed: ${errorMessage}`);

    }
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
           <p className="error">{message.includes('email') ? message : ''}</p>

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="error">{message.includes('password') ? message : ''}</p>

          <button type="submit">LOGIN</button>
          <p>{message}</p>

        </form>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <p>Not a Member? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;

