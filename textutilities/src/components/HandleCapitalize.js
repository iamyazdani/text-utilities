import React, { useState } from 'react';

function handleCapitalizeText(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function HandleCapitalize() {
  const [inputText, setInputText] = useState('');
  const [capitalizedText, setCapitalizedText] = useState('');

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setCapitalizedText(handleCapitalizeText(text));
  };

  return (
    <div>
      <h1>Text Capitalizer</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <div>
        <h2>Capitalized Text</h2>
        <p>{capitalizedText}</p>
      </div>
    </div>
  );
}

export default HandleCapitalize;
