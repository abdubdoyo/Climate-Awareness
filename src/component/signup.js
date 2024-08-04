import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Handle form submission logic here
      console.log('Username:', username);
      console.log('Password:', password);

      // Navigate to the homepage after successful sign-up
      navigate('/');
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
        <h1></h1>
        <p></p>
      </div>
      <div className="signup-container">
        <h2>S I G N U P</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">USERNAME:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <label htmlFor="password">PASSWORD:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <label htmlFor="confirm-password">RE-ENTER PASSWORD:</label><br />
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          /><br /><br />
          <button type="submit">SIGN UP</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default SignupPage;

