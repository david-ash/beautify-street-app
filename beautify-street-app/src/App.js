import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import SuggestionSelector from './components/SuggestionSelector';
import BeforeAfterViewer from './components/BeforeAfterViewer';

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [enhancedImageUrl, setEnhancedImageUrl] = useState(null);

  const handleImageUpload = (file, previewUrl) => {
    setImageFile(file);
    setImagePreviewUrl(previewUrl);
    setSelectedSuggestions([]);
    setEnhancedImageUrl(null);
  };

  const handleBeautify = () => {
    // Simulate an AI-enhanced image (use placeholder for now)
    setEnhancedImageUrl('https://via.placeholder.com/600x400?text=Enhanced+Street');
  };

  return (
    <div className="app-container">
      <h1>Urban Street Beautifier</h1>
      <ImageUpload onImageUpload={handleImageUpload} />

      {imagePreviewUrl && (
        <>
          <div className="image-preview-section">
            <h2>Preview</h2>
            <img src={imagePreviewUrl} alt="Uploaded" />
          </div>

          <SuggestionSelector
            selected={selectedSuggestions}
            onChange={setSelectedSuggestions}
          />

          {selectedSuggestions.length > 0 && (
            <button onClick={handleBeautify}>Beautify</button>
          )}
        </>
      )}

      {enhancedImageUrl && (
        <BeforeAfterViewer
          originalUrl={imagePreviewUrl}
          enhancedUrl={enhancedImageUrl}
        />
      )}
    </div>
  );
}

export default App;
