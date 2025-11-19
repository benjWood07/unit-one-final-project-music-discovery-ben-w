import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <h2>SoundScout</h2>
        <p className="tagline">Discover Music · Build Playlist · Share</p>
        <button>Create Playlist</button>
      </section>
      
      <section className="home-intro">
        <h3>Introduction</h3>
        <p>
          Welcome to SoundScout, your personal music discovery companion. 
          Create custom playlists, explore new genres, and share your musical 
          journey with friends. Get started by creating your first playlist today!
        </p>
        <button>About Us</button>
      </section>
    </div>
  );
}

export default HomePage;