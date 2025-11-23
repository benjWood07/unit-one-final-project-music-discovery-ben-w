import React, { useEffect } from 'react';
import SourceItem from '../items/SourceItem';
import '../styles/SourceList.css';

function SourceList({ sources, selectedSources, setSelectedSources, handleSubmit, handleBack, error }) {

  useEffect(() => {
    if (selectedSources.length === 0 && sources.length > 0) {
      const allSourceIds = sources.map(source => source.id);
      setSelectedSources(allSourceIds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources, setSelectedSources]);

  const toggleSource = (sourceId) => {
    if (selectedSources.includes(sourceId)) {
      setSelectedSources(selectedSources.filter(id => id !== sourceId));
    } else {
      setSelectedSources([...selectedSources, sourceId]);
    }
  };

  const toggleAll = () => {
    if (selectedSources.length === sources.length) {
      setSelectedSources([]);
    } else {
      const allSourceIds = sources.map(source => source.id);
      setSelectedSources(allSourceIds);
    }
  };

  const allSelected = sources.length > 0 && selectedSources.length === sources.length;

  return (
    <div className="source-list">
      <h3>Music Source</h3>
      <p>Select one or multiple sources</p>
      
      <div className="source-header">
        <span>
          <input 
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            title="Select All"
          />
        </span>
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
      
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SourceList;