import React, { useState } from 'react';
import './profilelogin.css'; // Importing custom CSS for styling

const ProfileLogin = () => {
  const [email, setEmail] = useState('');
  const [loginCodeSent, setLoginCodeSent] = useState(false);
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending login code (in real app, an API call to send the code is made)
      setLoginCodeSent(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid email address.');
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code) {
      // Simulate code validation (in a real app, you'd validate the code with an API)
      alert('Login successful!');
    } else {
      setErrorMessage('Please enter the login code.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/assets/logo.png" alt="Sab Kuch Trend Logo" className="login-logo" />

        <h2>Log in</h2>
        <p>Enter your email and we'll send you a login code</p>

        {!loginCodeSent ? (
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="btn-submit">
              Send Login Code
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit}>
            <div className="form-group">
              <label htmlFor="code">Enter Login Code</label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                placeholder="Enter the code sent to your email"
              />
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="btn-submit">
              Log In
            </button>
          </form>
        )}

        <p className="privacy-text">
          By logging in, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default ProfileLogin;
