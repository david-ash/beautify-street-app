import React, { useState } from 'react';

const suggestions = [
  { id: 1, label: 'Add Greenery' },
  { id: 2, label: 'Modernize Facades' },
  { id: 3, label: 'Improve Lighting' },
  { id: 4, label: 'Add Street Furniture' },
  { id: 5, label: 'Create Pedestrian Zone' },
];

const SuggestionSelector = ({ selected, onChange }) => {
  const handleToggle = (id) => {
    const newSelection = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];

    onChange(newSelection);
  };

  return (
    <div className="suggestion-section">
      <h2>Select Improvements</h2>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(suggestion.id)}
                onChange={() => handleToggle(suggestion.id)}
              />
              {suggestion.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionSelector;
