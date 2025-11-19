import React from 'react';
import Playlist from '../lists/Playlist';
import '../styles/PlaylistPage.css';
import MediaPlayer from '../MediaPlayer';
import '../styles/MediaPlayer.css';

const PlaylistPage = () => {
  return (
    <div>
      <h2>SoundScouter</h2>
      <Playlist />
      <button>Add Tracks</button>
      <MediaPlayer />
    </div>
  );
}

export default PlaylistPage;