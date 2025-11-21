import React from 'react';
import '../styles/SourceItem.css';

function SourceItem({ source, isSelected, toggleSource }) {
  return (
    <div className="source-item">
      <input 
        type="checkbox"
        id={`source-${source.id}`}
        checked={isSelected}
        onChange={() => toggleSource(source.id)}
      />
      <span className="source-name">{source.name}</span>
      <span className="source-type">{source.type}</span>
    </div>
  );
}

export default SourceItem;