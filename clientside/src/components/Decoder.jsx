// src/components/Decoder.js
import React, { useState } from 'react';
import axios from 'axios';

const Decoder = () => {
  const [morseCode, setMorseCode] = useState('');
  const [decodedResult, setDecodedResult] = useState('');

  const handleDecode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/decode', { morseCode });
      setDecodedResult(response.data.text);
    } catch (error) {
      console.error('Error decoding Morse code:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ color: '#3333cc' }}>Morse Code Decoder</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter Morse code to decode..."
        value={morseCode}
        onChange={(e) => setMorseCode(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <br />
      <button onClick={handleDecode} style={{ backgroundColor: '#FF6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Decode
      </button>
      <br />
      <strong style={{ color: '#3333cc' }}>Decoded Result:</strong>
      <p style={{ backgroundColor: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>{decodedResult}</p>
    </div>
  );
};

export default Decoder;
