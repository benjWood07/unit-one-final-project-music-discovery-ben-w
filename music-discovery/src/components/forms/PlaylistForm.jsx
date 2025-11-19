import React from 'react';
import '../styles/PlaylistForm.css';

function PlaylistForm() {
  return (
    <form className="playlist-form">
      <h3>Create Playlist</h3>
      
      <label htmlFor="playlist-name">Playlist Name</label>
      <input 
        type="text" 
        id="playlist-name" 
        name="playlist-name" 
        placeholder="Name"
      />
      
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        name="description" 
        placeholder="Optional..."
      />
      
      <button type="submit">Create</button>
    </form>
  );
}

export default PlaylistForm;