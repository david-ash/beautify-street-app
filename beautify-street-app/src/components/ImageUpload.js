import React from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      onImageUpload(file, previewUrl);
    }
  };

  return (
    <div>
      <label>Upload a street photo:</label>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default ImageUpload;
