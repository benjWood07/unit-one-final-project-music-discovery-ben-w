import React from 'react';
import Playlist from '../lists/Playlist';
//import MediaPlayer from './components/MediaPlayer';

const PlaylistPage = () => {
  return (
    <div>
      <h2>SoundScout</h2>
      <Playlist />
      <button>Add Tracks</button>
      <MediaPlayer />
    </div>
  );
}

export default PlaylistPage;