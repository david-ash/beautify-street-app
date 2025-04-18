import React from 'react';

const BeforeAfterViewer = ({ originalUrl, enhancedUrl }) => {
  return (
    <div className="before-after-section">
      <h2>Before / After</h2>
      <div className="image-grid">
        <div>
          <h4>Original</h4>
          <img src={originalUrl} alt="Original" />
        </div>
        <div>
          <h4>Enhanced</h4>
          <img src={enhancedUrl} alt="Enhanced" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterViewer;
