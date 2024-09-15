import { useNavigate } from 'react-router-dom';
import './Home.css'; // Assuming you want to style the Home component

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing authentication state)
    navigate('/login'); // Redirect back to login page
  };

  const goToProfile = () => {
    navigate('/profile'); // Redirect to the profile page
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Home Page</h1>
        <div className="header-buttons">
          <button onClick={goToProfile} className="profile-button">Profile</button>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>

      <main className="home-content">
        <p>Here is your personalized content. You are now logged in!</p>
        {/* Add any content or features you'd like here */}
      </main>
    </div>
  );
}

export default Home;
