import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaylistForm from '../forms/PlaylistForm';
import '../styles/CreatePlaylistPage.css';

function CreatePlaylistPage({ playlistName, setPlaylistName, playlistDescription, setPlaylistDescription }) {
  const navigate = useNavigate();

  useEffect(() => {
    setPlaylistName('');
    setPlaylistDescription('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (playlistName.trim() === '') {
      alert('Please enter a playlist name');
      return;
    }

    navigate('/select-genre');
  };

  return (
    <div className="create-playlist-page">
      <PlaylistForm 
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistDescription={playlistDescription}
        setPlaylistDescription={setPlaylistDescription}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreatePlaylistPage;