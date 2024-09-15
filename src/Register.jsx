import { useState } from 'react';
import './Register.css'; // Importing CSS file

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    userType: 'Volunteer' // Default to 'Volunteer'
  });

  const [errors, setErrors] = useState({
    emailMatchError: false,
    passwordMatchError: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    setErrors({
      emailMatchError: false,
      passwordMatchError: false
    });

    if (formData.email !== formData.confirmEmail) {
      setErrors(prev => ({ ...prev, emailMatchError: true }));
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, passwordMatchError: true }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit the data
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className="register-container">
        <img src="./SAHM_logo.png"></img>
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmEmail">Confirm Email</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleInputChange}
            required
          />
          {errors.emailMatchError && <p className="error-message">Emails do not match</p>}
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.passwordMatchError && <p className="error-message">Passwords do not match</p>}
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

        <button type="submit" className="submit-button">Register</button>

        <a href="/login" className="login-link">Already have an account?</a>
      </form>   
    </div>
  );
}

export default Register;
