import React from 'react';
import TrackItem from './TrackItem';

function TrackList() {
  return (
    <div>
      <h3>Select Tracks</h3>
      <p>Select one or multiple tracks</p>
      
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
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
          <TrackItem />
        </tbody>
      </table>
      
      <div>
        <a href="#back">Back</a>
        <button>Add Tracks</button>
      </div>
    </div>
  );
}

export default TrackList;