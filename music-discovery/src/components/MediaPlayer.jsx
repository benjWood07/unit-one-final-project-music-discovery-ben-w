import React, { useState } from 'react';
import './styles/MediaPlayer.css';

function MediaPlayer() {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="media-player">
      <button>|◀</button>
      <button>◀</button>
      <button>||</button>
      <button>▶</button>
      <button>▶▶</button>
      <button>▶|</button>
      <button>⤨</button>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={volume} 
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </div>
  );
}

export default MediaPlayer;