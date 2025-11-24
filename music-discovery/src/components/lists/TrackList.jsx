import React from 'react';
import '../styles/TrackList.css';
import BackButton from '../common/BackButton';
import SubmitButton from '../common/SubmitButton';

function TrackList({ tracks, selectedTracks, setSelectedTracks, handleSubmit, handleBack, error }) {
  
  const toggleTrack = (trackId) => {
    if (selectedTracks.includes(trackId)) {
      setSelectedTracks(selectedTracks.filter(id => id !== trackId));
    } else {
      setSelectedTracks([...selectedTracks, trackId]);
    }
  };

  const toggleAll = () => {
    if (selectedTracks.length === tracks.length) {
      setSelectedTracks([]);
    } else {
      const allTrackIds = tracks.map(track => track.id);
      setSelectedTracks(allTrackIds);
    }
  };

  const allSelected = tracks.length > 0 && selectedTracks.length === tracks.length;

  return (
    <div className="track-list">
      <h3>Select Tracks</h3>
      <p>Select one or multiple tracks</p>
      
      <div className="track-list-container">
        <table>
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox"
                  checked={allSelected}
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
                <td>{track.title}</td>
                <td>{track.artist}</td>
                <td>{track.time}</td>
                <td>{track.album}</td>
                <td>{track.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="track-list-actions">
        <BackButton onClick={handleBack} />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </div>
      
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default TrackList;