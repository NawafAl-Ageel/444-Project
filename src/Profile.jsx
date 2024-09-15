import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Optional: Add some profile styles

function Profile() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate('/home'); // Redirect back to home
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <p>Username: JohnDoe</p>
      <p>Email: johndoe@example.com</p>
      <p>User Type: Volunteer</p>

      <button onClick={goBackToHome} className="back-button">Back to Home</button>
    </div>
  );
}

export default Profile;
