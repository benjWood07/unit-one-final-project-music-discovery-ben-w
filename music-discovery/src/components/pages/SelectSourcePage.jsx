import React from 'react';
import SourceList from '../lists/SourceList';
import '../styles/SourceList.css';
import '../styles/SelectSourcePage.css';

function SelectSourcePage() {
  return (
    <div className="select-source-page">
      <SourceList />
    </div>
  );
}

export default SelectSourcePage;