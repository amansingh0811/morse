// src/components/Encoder.js
import React, { useState } from 'react';
import { textToMorse } from '../morse-code-api';
import './Encoder.css'; // Import the CSS file for styling

const Encoder = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');

  const handleEncode = () => {
    const morseCode = textToMorse(inputText);
    setEncodedText(morseCode);
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = encodedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <div className="encoder-container">
      <h1>Morse Code Encoder</h1>
      <textarea
        className="encoder-textarea"
        placeholder="Enter text to encode"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="encoder-button" onClick={handleEncode}>
        Encode
      </button>
      <div className="result-container">
        <p>Encoded Text:</p>
        <p className="encoded-text">{encodedText}</p>
        <button className="copy-button" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default Encoder;
