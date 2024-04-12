import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For now, let's assume login is successful
    // Redirect to home page
    navigate("/menu");
  };

  const loginContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/loginback.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const loginBoxStyle = {
    width: '300px',
    padding: '40px',
    border: '2px solid black',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // 0.5 alpha channel makes it 50% transparent
    marginTop: '-120px', // Move the box 50px from the top
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '50%', // 50% width
    padding: '10px 20px', // Padding for top/bottom and left/right
    margin: '20px auto', // Center horizontally and add margin top/bottom
  };

  const pStyle = {
    margin: '0',
  };

  return (
    <div style={loginContainerStyle}>
      <div style={loginBoxStyle}>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required style={inputStyle} />
          <br />
          <button type="button" style={buttonStyle} onClick={handleLogin}>Login</button>
        </form>
        <p style={pStyle}>New User? <Link to="/register">Register your account</Link></p>
      </div>
    </div>
  );
}

export default Login;
