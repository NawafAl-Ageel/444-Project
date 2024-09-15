import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'Volunteer', // Default user type
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic (for now we'll just redirect)
    navigate('/home'); // Redirect to Home page after successful login
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>User Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="userType"
                value="Volunteer"
                checked={formData.userType === 'Volunteer'}
                onChange={handleInputChange}
              />
              Volunteer
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="Organization"
                checked={formData.userType === 'Organization'}
                onChange={handleInputChange}
              />
              Organization
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">Login</button>

        <a href="#" className="forgot-password">I Forgot My Password</a>
        <a href="/register" className="register-link">Don't have an account? Register</a>
      </form>
    </div>
  );
}

export default Login;
