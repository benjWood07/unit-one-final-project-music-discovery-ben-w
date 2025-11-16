import React from 'react';
import PlaylistTrack from '../items/PlaylistTrack';

function Playlist() {
  return (
    <div>
      <h3>Playlist Name</h3>
      
      <table>
        <thead>
          <tr>
            <th>---------</th>
            <th>------------</th>
            <th>----------------</th>
            <th>---------</th>
          </tr>
        </thead>
        <tbody>
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
          <PlaylistTrack />
        </tbody>
      </table>
    </div>
  );
}

export default Playlist;