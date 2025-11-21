import React from 'react';
import Playlist from '../lists/Playlist';
import MediaPlayer from '../MediaPlayer';
import '../styles/PlaylistPage.css';

function PlaylistPage({ playlistName, selectedTracks }) {
  return (
    <div className="playlist-page">
      <Playlist 
        playlistName={playlistName}
        selectedTracks={selectedTracks}
      />
      <MediaPlayer />
    </div>
  );
}

export default PlaylistPage;