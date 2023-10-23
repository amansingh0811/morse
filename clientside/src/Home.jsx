import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home()
{
    const navigate=useNavigate();
        function handleEncode()
    {
        navigate('./Encode');
    }
    function handleDecode()
    {
       navigate('./Decode');
    }
   return (
    <div className="Home">
        <div className="container">
        <div className="heading">
            <p className="glitch">
            <div className="typewriter1">
                <h1>Morse-Coder</h1>
            </div>
            </p>
        </div>
        <div className="upper-cont">
        <div className="content-cont">
        <div className="content">
            <div className="typewriter1">
                <h1>What is Morse Code?</h1>
            </div>
        Morse code is a method used in telecommunication to encode text characters as standardized sequences of 
        two different signal durations, called dots and dashes, or dits and dahs.Morse code is named after Samuel Morse, 
        one of the inventors of the telegraph.
        Morse Code, either of two systems for representing letters of the alphabet, numerals, and punctuation marks by an
         arrangement of dots, dashes, and spaces. The codes are transmitted as electrical pulses of varied lengths or 
         analogous mechanical or visual signals, such as flashing lights. One of the systems was invented in the United 
         States by American artist and inventor Samuel F.B. Morse during the 1830s for electrical telegraphy. This version
          was further improved by American scientist and businessman Alfred Lewis Vail, Morse’s assistant and partner. Soon 
          after its introduction in Europe, it became apparent that the original Morse Code was inadequate for the transmission
           of much non-English text, since it lacked codes for letters with diacritic marks. To remedy this deficiency, a 
           variant called the International Morse Code was devised by a conference of European nations in 1851. This newer 
           code is also called Continental Morse Code.
        </div>
        </div>
        </div>
        <div className="upper">
        <div className="container1"><button className="btn" onClick={handleEncode}>Encode.</button></div>
        <div className="container2"><button className="btn" onClick={handleDecode}>Decode.</button></div>
        </div>
        </div>
        <div className="footer"></div>
    </div>
   );
}
export default Home;