import React from 'react';
import '../styles/PlaylistForm.css';

function PlaylistForm({ playlistName, setPlaylistName, playlistDescription, setPlaylistDescription, handleSubmit }) {
  return (
    <form className="playlist-form" onSubmit={handleSubmit}>
      <h3>Create Playlist</h3>
      
      <label htmlFor="playlist-name">Playlist Name</label>
      <input 
        type="text" 
        id="playlist-name" 
        name="playlist-name" 
        placeholder="Name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        required
      />
      
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        name="description" 
        placeholder="Optional"
        value={playlistDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />
      
      <button type="submit">Create</button>
    </form>
  );
}

export default PlaylistForm;