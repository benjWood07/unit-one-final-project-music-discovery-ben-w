import React from 'react';
import SourceItem from '../items/SourceItem';
import '../styles/SourceList.css';

function SourceList() {
  return (
    <div className="source-list">
      <h3>Sources</h3>
      <p>Select one or multiple sources</p>
      
      <div className="source-header">
        <span></span>
        <span>Source Name</span>
        <span>Source Type</span>
      </div>
      
      <div className="source-items">
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
      </div>
      
      <div className="source-list-actions">
        <a href="#back">Back</a>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SourceList;
