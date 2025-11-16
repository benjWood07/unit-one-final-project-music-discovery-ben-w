import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import SelectGenrePage from './pages/SelectGenrePage';
import SelectSourcePage from './pages/SelectSourcePage';
import SelectTracksPage from './pages/SelectTracksPage';
import PlaylistPage from './pages/PlaylistPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
