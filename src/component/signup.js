import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate


function SignupPage( ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers: {
        'Content-Typer': 'application/json',
      },
      body: JSON.stringify({
        user:{
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
    });

    const data= await response.json();

    if (response.ok){
      setMessage('Signup successful');
      navigate('/');
    }else{
      const errorMessage = data.errors ? data.errors.join(', ') : 'Signup failed due to unknown error';
      setMessage(`Signup failed: ${errorMessage}`);
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
      <div className="signup-container">
        <h2>S I G N U P</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">EMAIL:</label><br />
          <input
            type="text"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          /><br /><br />

          <button type="submit" >SIGN UP</button>
          <p>{message}</p>
        </form>

      </div>
    </div>
  );
}

export default SignupPage;

