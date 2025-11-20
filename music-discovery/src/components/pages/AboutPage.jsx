import React from 'react';
import '../styles/AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      
      <div className="about-content">
      <section>
        <h3>Algorith-free, with Purpose</h3>
        <p>
            SoundScouter is hear to provide an algorithm-free resource for discovering artists
            and the new muic they are creating. This means your activity won't be tracked
            and suggested material won't be based on previous selections. No content will
            hidden or visible based on the user's history.
        </p>
      </section>
      
      <section>
        <h3>Our Mission</h3>
        <p>
            Our mission is to provide new music enthusiasts with an experience that is focused
            purely on discovering music of all types, genres, and origins. This includes unsigned
            and signed artists. With an ever-expanding library supplied by a growing list of
            sources, there will always be something new to discover. 
        </p>
      </section>
      
      <section className="about-full-width">
        <h3>True Discovery</h3>
        <p>
            In a world filled with tailored content, SoundScouter was created to keep every user's
            experience uniquly theirs to share. We encourage users to branch out from their typical
            musical preference, while continuing to offer new content from genres they already love.
            After all, life is not about only building on what you know you like, it's about
            dicovering what you did not know you'd love.
        </p>
      </section>
      </div>
      
      <button>Contact Us</button>
    </div>
  );
}

export default AboutPage;