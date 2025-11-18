import React from 'react';
import '../styles/MediaPlayer.css';

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