import React, { useState, useEffect } from 'react';
import '../styles/Playlist.css';

function Playlist({ playlistName, selectedTracks }) {
  const [checkedTracks, setCheckedTracks] = useState([]);

  useEffect(() => {
    const allTrackIds = selectedTracks.map(track => track.id);
    setCheckedTracks(allTrackIds);
  }, [selectedTracks]);

  const toggleTrack = (trackId) => {
    if (checkedTracks.includes(trackId)) {
      setCheckedTracks(checkedTracks.filter(id => id !== trackId));
    } else {
      setCheckedTracks([...checkedTracks, trackId]);
    }
  };

  const toggleAll = () => {
    if (checkedTracks.length === selectedTracks.length) {
      setCheckedTracks([]);
    } else {
      const allTrackIds = selectedTracks.map(track => track.id);
      setCheckedTracks(allTrackIds);
    }
  };

  const allChecked = selectedTracks.length > 0 && checkedTracks.length === selectedTracks.length;

  return (
    <div className="playlist">
      <h3>{playlistName || 'My Playlist'}</h3>
      
      <div className="playlist-container">
        <table>
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAll}
                  title="Select All"
                />
              </th>
              <th>Title</th>
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
                    <input 
                      type="checkbox"
                      checked={checkedTracks.includes(track.id)}
                      onChange={() => toggleTrack(track.id)}
                    />
                  </td>
                  <td>{track.title}</td>
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