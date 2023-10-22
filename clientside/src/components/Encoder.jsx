import React, { useState } from 'react';
import axios from 'axios';

const Encoder = () => {
  const [text, setText] = useState('');
  const [encodedResult, setEncodedResult] = useState('');

  const handleEncode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/encode', { text });
      setEncodedResult(response.data.morseCode);
    } catch (error) {
      console.error('Error encoding Morse code:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ color: '#3333cc' }}>Morse Code Encoder</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text to encode..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ margin: '10px', padding: '10px' }}
      />
      <br />
      <button onClick={handleEncode} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Encode
      </button>
      <br />
      <strong style={{ color: '#3333cc' }}>Encoded Result:</strong>
      <p style={{ backgroundColor: '#e6f7ff', padding: '10px', borderRadius: '5px' }}>{encodedResult}</p>
    </div>
  );
};
export default Encoder;