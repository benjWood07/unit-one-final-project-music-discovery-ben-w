import { Link } from 'react-router';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <section>
        <h2>SoundScout</h2>
        <p>Discover Music | Build Playlist | Share</p>
        <button>Create Playlist</button>
      </section>
      
      <section>
        <h3>Introduction</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptates voluptatibus quod quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>About Us</button>
      </section>
    </div>
  );
}

export default HomePage;