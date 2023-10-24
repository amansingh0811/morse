// src/components/Decoder.js
import React, { useState } from 'react';
import { morseToText } from '../morse-code-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Decoder.css'; 

const Decoder = () => {
  const [inputMorse, setInputMorse] = useState('');
  const [decodedText, setDecodedText] = useState('');

  const handleDecode = () => {
    const decodedTextResult = morseToText(inputMorse);
    setDecodedText(decodedTextResult);
  };

  const handleCopyToClipboard = () => {
    toast("Copied to Clipboard!");
    const textArea = document.createElement('textarea');
    textArea.value = decodedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <div>
      <ToastContainer />
      <div className="decheading">
            <p className="decglitch">
            <div className="dectypewriter1">
                <h1>Morse Code Decoder</h1>
            </div>
            </p>
        </div>
    <div className="decoder-container">
      <h1 className='enterdec'>Enter Morse Code</h1>
      <textarea
        className="decoder-textarea"
        placeholder="Enter Morse code to decode"
        value={inputMorse}
        onChange={(e) => setInputMorse(e.target.value)}
      />
      <button className="decoder-button" onClick={handleDecode}>
        Decode
      </button>
      <h1 className='enterdec'>Decoded Text : </h1>
      <div className="result-container">
        <p className="decoded-text">{decodedText}</p>
      </div>
      <button className="copy-button" onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>
    </div>
    </div>
  );
};

export default Decoder;
