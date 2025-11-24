import React from 'react';
import Playlist from '../lists/Playlist';
//import MediaPlayer from '../MediaPlayer';
import '../styles/PlaylistPage.css';

function PlaylistPage({ playlistName, playlistDescription, selectedTracks }) {
  return (
    <div className="playlist-page">
      <Playlist 
        playlistName={playlistName}
        playlistDescription={playlistDescription}
        selectedTracks={selectedTracks}
      />
      {/* <MediaPlayer /> */}
    </div>
  );
}

export default PlaylistPage;