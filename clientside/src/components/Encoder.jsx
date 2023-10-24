// src/components/Encoder.js
import React, { useState } from 'react';
import { textToMorse } from '../morse-code-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Encoder.css'; 


const Encoder = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');

  const handleEncode = () => {
    const morseCode = textToMorse(inputText);
    setEncodedText(morseCode);
  };



  const handleCopyToClipboard = () => {
    toast("Copied to Clipboard!");
    const textArea = document.createElement('textarea');
    textArea.value = encodedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

  };
  
  
  return (
    <div>
      <ToastContainer />
      <div className="enc-heading">
            <p className="enc-glitch">
            <div className="enc-typewriter1">
                <h1>Morse Code Encoder</h1>
            </div>
            </p>
        </div>
    <div className="encoder-container">
      <h2 className='enter'>Enter Text</h2>
      <textarea
        className="encoder-textarea"
        placeholder="Enter text to encode"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="encoder-button" onClick={handleEncode}>
        Encode
      </button>
      <h2 className='enter'>Encoded Text : </h2>
      <div className="result-container">
        <p className="encoded-text">{encodedText}</p>
      </div>
      <button className="copy-button1" onClick={handleCopyToClipboard}>
          Copy to Clipboard
      </button>
    </div>
    </div>
  );
};

export default Encoder;
