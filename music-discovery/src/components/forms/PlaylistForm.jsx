import React from 'react';

function PlaylistForm() {
  return (
    <form>
      <h3>Create Playlist</h3>
      
      <label htmlFor="playlistName">Playlist Name</label>
      <input 
        type="text" 
        id="playlistName" 
        name="playlistName"
        placeholder="Enter playlist name"
      />
      
      <label htmlFor="description">Description</label>
      <textarea 
        id="description" 
        name="description"
        placeholder="Enter description (optional)"
        rows="4"
      />
      
      <button type="submit">Create</button>
    </form>
  );
}

export default PlaylistForm;