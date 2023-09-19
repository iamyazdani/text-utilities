import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log("On change");
    }

    function handleSentenceCase() {
        if (typeof text !== 'string') {
            return 'Input is not a valid string.';
        } else {
            // Split the text into sentences using a regular expression
            const sentences = text.split(/(\.|!|\?)\s*/);
    
            // Capitalize the first letter of each sentence and join them with the correct punctuation
            const sentenceCaseText = sentences.map(sentence => {
                if (sentence.length > 0) {
                    // trim any leading and trailing spaces
                    sentence = sentence.trim();
    
                    // Capitalize the first letter of the sentence
                    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
                } else {
                    return sentence;
                }
            }).join(' ');
            return setText(sentenceCaseText);
        }
    }
    
    function handleLowerCase() {
        setText(text.toLowerCase());
    }

    function handleUpperCase() {
        setText(text.toUpperCase());
    }



    

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
      
    //   export default HandleCapitalize;
      










    function handleCapitalizeText () {
        
    }

    const removeExtraSpaces = () => {

    }

    const handleCopyText = () => {
        if (text) {
            // Create a textarea element to hold the text temporarily
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
    
            // Select the text in the textarea
            textarea.select();
    
            // Copy the selected text to the clipboard
            document.execCommand('copy');
    
            // Remove the temporary textarea
            document.body.removeChild(textarea);
    
            // Provide some feedback to the user (optional)
            // alert('Text copied to clipboard: ' + text);
        }
    }
    
    const handlePaste = (text) => {
        const pastedData = text.clipboardData.getData('text');
        setText(pastedData);
    }

    function pasteText() {
        alert(text);
        // Create a hidden textarea element
        let textarea = document.createElement('textarea');
        textarea = text;
        alert(textarea);
        
        // Add it to the document
        // document.body.appendChild(textarea);
        
        // Focus the textarea
        // textarea.focus();
        // alert(textarea);
        // Execute the paste command
        document.execCommand('paste');
        alert(textarea);

        // Get the pasted text
        const pastedText = textarea.value;
        alert(pastedText);
        // Remove the textarea from the document
        document.body.removeChild(textarea);
        
        // Do something with the pasted text (e.g., display it)
        console.log('Pasted Text:', pastedText);
      }
      
      // You can call this function in response to a user action, like a button click
      // Example:
      // <button onclick="pasteText()">Paste Copied Text</button>
      

    const handleDownload = () => {
        // console.log("Uppercase was clicked!");
        // setText(text.toUpperCase());
        // console.log(text.toUpperCase());
    }

    const handleClearText = () => {
        setText('');
    }

    return (
    <>
    <div className='container'>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleSentenceCase}>Convert to Sentence Case</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleCapitalizeText}>Convert to Capitalized Case</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={pasteText}>Paste</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>Character Count: {text.length} | Word Count: {text.split(" ").length} | Line Count: </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p className='text-muted'>{text}</p>
    </div>
    </>
    );
}
