import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/home'); // Redirect back to home
  };

  const goToHistory = () => {
    navigate('/history'); // Redirect to history page
  };

  const handleEditProfile = () => {
    // Logic to handle profile edit (for now just an alert)
    alert('Edit profile functionality');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-sidebar">
          <img src="images/profile-picture.jpg" alt="Profile" className="profile-picture" />
          <h2 className="profile-name">Nawaf Alageel</h2>
          <p className="profile-title">Volunteer</p>

          <div className="profile-stats">
            <p>Opportunities Participated: <span className="stat-number">12</span></p>
            <p>Current Opportunities: <span className="stat-number">3</span></p>
          </div>

          <button className="public-profile-btn">View Public Profile</button>
        </div>

        <div className="profile-details">
          <h3>Account Information</h3>

          <div className="profile-info">
            <div className="profile-info-item">
              <label>Email</label>
              <p>NawafSoftwareEng@gmail.com</p>
            </div>
            <div className="profile-info-item">
              <label>City of Residence</label>
              <p>Riyadh</p>
            </div>
            <div className="profile-info-item">
              <label>Date of Birth</label>
              <p>2003-09-28</p>
            </div>
            <div className="profile-info-item">
              <label>Age</label>
              <p>20</p>
            </div>
          </div>

          <div className="profile-buttons">
            <button onClick={handleEditProfile} className="edit-button">Edit Profile</button>
            <button onClick={goToHistory} className="history-button">View History</button>
            <button onClick={goBackToHome} className="back-button">Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
