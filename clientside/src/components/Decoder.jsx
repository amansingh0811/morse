// src/components/Decoder.js
import React, { useState } from 'react';
import { morseToText } from '../morse-code-api';
import './Decoder.css'; // Import the CSS file for styling

const Decoder = () => {
  const [inputMorse, setInputMorse] = useState('');
  const [decodedText, setDecodedText] = useState('');

  const handleDecode = () => {
    const decodedTextResult = morseToText(inputMorse);
    setDecodedText(decodedTextResult);
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = decodedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <div className="decoder-container">
      <h1>Morse Code Decoder</h1>
      <textarea
        className="decoder-textarea"
        placeholder="Enter Morse code to decode"
        value={inputMorse}
        onChange={(e) => setInputMorse(e.target.value)}
      />
      <button className="decoder-button" onClick={handleDecode}>
        Decode
      </button>
      <div className="result-container">
        <p>Decoded Text:</p>
        <p className="decoded-text">{decodedText}</p>
        <button className="copy-button" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default Decoder;
