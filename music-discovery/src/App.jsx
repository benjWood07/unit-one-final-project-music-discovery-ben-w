import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';
import SelectGenrePage from './components/pages/SelectGenrePage';
import SelectSourcePage from './components/pages/SelectSourcePage';
import SelectTracksPage from './components/pages/SelectTracksPage';
import PlaylistPage from './components/pages/PlaylistPage';
import AboutPage from './components/pages/AboutPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <SelectGenrePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
