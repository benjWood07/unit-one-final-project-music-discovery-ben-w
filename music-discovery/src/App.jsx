import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import mockGenres from './test-data/mockGenres';
import mockSources from './test-data/mockSources';
import mockTracks from './test-data/mockTracks';

function App() {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/create-playlist" 
              element={
                <CreatePlaylistPage 
                  playlistName={playlistName}
                  setPlaylistName={setPlaylistName}
                  playlistDescription={playlistDescription}
                  setPlaylistDescription={setPlaylistDescription}
                />
              } 
            />
            <Route 
              path="/select-genre" 
              element={
                <SelectGenrePage 
                  genres={mockGenres}
                  selectedGenres={selectedGenres}
                  setSelectedGenres={setSelectedGenres}
                />
              } 
            />
            <Route 
              path="/select-source" 
              element={
                <SelectSourcePage 
                  sources={mockSources}
                  selectedSources={selectedSources}
                  setSelectedSources={setSelectedSources}
                />
              } 
            />
            <Route 
              path="/select-tracks" 
              element={
                <SelectTracksPage 
                  tracks={mockTracks}
                  selectedTracks={selectedTracks}
                  setSelectedTracks={setSelectedTracks}
                />
              } 
            />
            <Route 
              path="/playlist" 
              element={
                <PlaylistPage 
                  playlistName={playlistName}
                  selectedTracks={selectedTracks}
                />
              } 
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;