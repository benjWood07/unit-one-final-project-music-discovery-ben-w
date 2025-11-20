import React from 'react';
import PlaylistTrack from '../PlaylistTrack';
import '../styles/Playlist.css'

function Playlist() {
  return (
    <div className="playlist">
      <h3>Playlist Name</h3>
      
      <div className="playlist-container">
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Playlist;