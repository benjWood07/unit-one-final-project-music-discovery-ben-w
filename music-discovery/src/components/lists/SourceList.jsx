import React from 'react';
import SourceItem from './SourceItem';

function SourceList() {
  return (
    <div>
      <h3>Music Source</h3>
      <p>Select one or multiple sources</p>
      
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      <SourceItem />
      
      <div>
        <a href="#back">Back</a>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SourceList;
