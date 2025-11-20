import React from 'react';
import TrackItem from '../items/TrackItem';
import '../styles/TrackList.css'

function TrackList() {
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
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
              <td>----------</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="track-list-actions">
        <a href="#back">Back</a>
        <button>Add Tracks</button>
      </div>
    </div>
  );
}

export default TrackList;