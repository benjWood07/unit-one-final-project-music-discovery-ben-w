import React from 'react';
import '../styles/SourceItem.css';

function SourceItem() {
  return (
    <div className="source-item">
      <input type="checkbox" id="source" />
      <span className="source-name">---------</span>
      <span className="source-type">---------</span>
    </div>
  );
}

export default SourceItem;