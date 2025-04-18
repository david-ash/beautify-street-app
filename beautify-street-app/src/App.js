import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleImageUpload = (file, previewUrl) => {
    setImageFile(file);
    setImagePreviewUrl(previewUrl);
  };

  return (
    <div className="app-container">
      <h1>Urban Street Beautifier</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {imagePreviewUrl && (
        <div className="image-preview-section">
          <h2>Preview</h2>
          <img src={imagePreviewUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default App;
