import React from 'react';
import './MediaPlayer.css';

function MediaPlayer() {
  return (
    <div className="media-player">
      <button>⏮</button>
      <button>⏪</button>
      <button>⏸</button>
      <button>▶</button>
      <button>⏩</button>
      <button>⏭</button>
      <button>🔀</button>
      <button>🔊</button>
    </div>
  );
}

export default MediaPlayer;