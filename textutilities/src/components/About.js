import React, { useState } from 'react';

export default function About(props) {

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const [myStyle, setMyStyle] = useState({
    color: '#002B36',
    backgroundColor: 'white'
  });

  const handleDarkMode = () => {
    if (myStyle.color === "#002B36") {
      setMyStyle({
        color: 'white',
        backgroundColor: '#002B36',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");    
    } else {
      setMyStyle({
        color: '#002B36',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  }

  return (
    <>
    <div className="container" style={myStyle}>
      <h3 className='my-2'>About us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Analyze Your Text</strong></button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtilities gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Free to use</strong></button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtilities is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtilities reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><strong>Browser Compatible</strong></button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-primary my-2" onClick={handleDarkMode}>{btntext}</button>
      </div>
      
      <div className="b-example-divider"></div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="/about" className="nav-link px-2">About</a></li>
          </ul>
          <p className="text-center text-muted">&copy; 2023 TekGeminus Solutions (P) Ltd.</p>
        </footer>
      </div>
    </>
  );
}
