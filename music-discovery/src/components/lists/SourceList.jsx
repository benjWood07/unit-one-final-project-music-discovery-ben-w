import React from 'react';
import SourceItem from '../items/SourceItem';
import '../styles/SourceList.css';

function SourceList({ sources, selectedSources, setSelectedSources, handleSubmit, handleBack }) {
  
  const toggleSource = (sourceId) => {
    if (selectedSources.includes(sourceId)) {
      setSelectedSources(selectedSources.filter(id => id !== sourceId));
    } else {
      setSelectedSources([...selectedSources, sourceId]);
    }
  };

  return (
    <div className="source-list">
      <h3>Music Source</h3>
      <p>Select one or multiple sources</p>
      
      <div className="source-header">
        <span></span>
        <span>Source Name</span>
        <span>Source Type</span>
      </div>
      
      <div className="source-items">
        {sources.map((source) => (
          <SourceItem 
            key={source.id}
            source={source}
            isSelected={selectedSources.includes(source.id)}
            toggleSource={toggleSource}
          />
        ))}
      </div>
      
      <div className="source-list-actions">
        <a href="#" onClick={(e) => { e.preventDefault(); handleBack(); }}>Back</a>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SourceList;