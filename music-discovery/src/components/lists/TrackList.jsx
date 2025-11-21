import React from 'react';
import '../styles/TrackList.css';

function TrackList({ tracks, selectedTracks, setSelectedTracks, handleSubmit, handleBack }) {
  
  const toggleTrack = (trackId) => {
    if (selectedTracks.includes(trackId)) {
      setSelectedTracks(selectedTracks.filter(id => id !== trackId));
    } else {
      setSelectedTracks([...selectedTracks, trackId]);
    }
  };

  return (
    <div className="track-list">
      <h3>Select Tracks</h3>
      <p>Select one or multiple tracks</p>
      
      <div className="track-list-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Artist</th>
              <th>Name</th>
              <th>Time</th>
              <th>Album</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.id}>
                <td>
                  <input 
                    type="checkbox"
                    id={`track-${track.id}`}
                    checked={selectedTracks.includes(track.id)}
                    onChange={() => toggleTrack(track.id)}
                  />
                </td>
                <td>{track.artist}</td>
                <td>{track.name}</td>
                <td>{track.time}</td>
                <td>{track.album}</td>
                <td>{track.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="track-list-actions">
        <a href="#" onClick={(e) => { e.preventDefault(); handleBack(); }}>Back</a>
        <button onClick={handleSubmit}>Add Tracks</button>
      </div>
    </div>
  );
}

export default TrackList;