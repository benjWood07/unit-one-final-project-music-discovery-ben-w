import React from 'react';
import Playlist from '../lists/Playlist';
import '../styles/PlaylistPage.css';
import MediaPlayer from '../MediaPlayer';
import '../styles/MediaPlayer.css';

function PlaylistPage() {
  return (
    <div className="playlist-page">
      <Playlist />
      <MediaPlayer />
    </div>
  );
}

export default PlaylistPage;