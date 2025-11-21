import React from 'react';
import '../styles/Playlist.css';

function Playlist({ playlistName, selectedTracks }) {
  return (
    <div className="playlist">
      <h3>{playlistName || 'My Playlist'}</h3>
      
      <div className="playlist-container">
        <table>
          <thead>
            <tr>
              <th></th>             
              <th>Name</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Album</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {selectedTracks.length > 0 ? (
              selectedTracks.map((track) => (
                <tr key={track.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{track.name}</td>
                  <td>{track.artist}</td>
                  <td>{track.time}</td>
                  <td>{track.album}</td>
                  <td>{track.genre}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                  No tracks selected
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Playlist;
