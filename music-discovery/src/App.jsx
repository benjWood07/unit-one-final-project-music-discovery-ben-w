import React, { useState, useEffect, useRef } from 'react';
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

  const prevGenresRef = useRef([]);

  const filteredSources = selectedGenres.length > 0
    ? mockSources.filter(source => 
        source.genres.some(genre => selectedGenres.includes(genre))
      )
    : mockSources;

  const filteredTracks = React.useMemo(() => {
    let tracks = mockTracks;
    
    if (selectedGenres.length > 0) {
      tracks = tracks.filter(track => 
        track.genre && selectedGenres.includes(track.genre)
      );
    }
    
    if (selectedSources.length > 0) {
      tracks = tracks.filter(track => 
        track.sourceId && selectedSources.includes(track.sourceId)
      );
    }
    
    return tracks;
  }, [selectedGenres, selectedSources]);

  const selectedTrackObjects = filteredTracks.filter(track => 
    selectedTracks.includes(track.id)
  );

  useEffect(() => {
    const genresChanged = JSON.stringify(prevGenresRef.current) !== JSON.stringify(selectedGenres);
    
    if (genresChanged && prevGenresRef.current.length > 0) {
      setSelectedSources([]);
    }
    
    prevGenresRef.current = selectedGenres;
  }, [selectedGenres]);

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
                  sources={filteredSources}
                  selectedSources={selectedSources}
                  setSelectedSources={setSelectedSources}
                />
              } 
            />
            <Route 
              path="/select-tracks" 
              element={
                <SelectTracksPage 
                  tracks={filteredTracks}
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
                  playlistDescription={playlistDescription}
                  selectedTracks={selectedTrackObjects}
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