import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleSentenceCase = () => {
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
            setText(sentenceCaseText);
            props.showAlert("Converted to sentence case!", "success");
        }
    }
    
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleCapitalizeText = () => {
        const words = text.split(' '); // Split the text into words
        const capitalizedWords = words.map(word => {
            if (word.length === 0) {
                return ''; // Handle empty strings, e.g., multiple spaces
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        setText(capitalizedWords.join(' ')); // Join the capitalized words back into a string
        props.showAlert("Converted to capitalize case!", "success");
    }
    
    const handleCopyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clipboard!", "success");
    }
    
    const handlePaste = () => {
        if (navigator.clipboard) {
          navigator.clipboard.readText()
            .then((pastedText) => {
              // Append the pasted text to the current text state
              setText((prevText) => prevText + pastedText);
              props.showAlert("Pasted from Clipboard!", "success");
            })
            .catch((err) => {
              console.error("Failed to read from clipboard:", err);
              props.showAlert("Failed to paste from Clipboard.", "error");
            });
        } else {
          // Clipboard API not supported by the browser
          console.error("Clipboard API not supported by this browser.");
        }
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleDownload = () => {
        if (text.length === 0) {
          props.showAlert("Text is empty. Nothing to download.", "warning");
          return;
        }
      
        // Create a Blob with the text content
        const blob = new Blob([text], { type: 'text/plain' });
      
        // Create a temporary URL for the Blob
        const blobURL = URL.createObjectURL(blob);
      
        // Create an anchor tag to trigger the download
        const anchor = document.createElement('a');
        anchor.href = blobURL;
        anchor.download = 'downloaded-text.txt'; // Set the desired filename here

        anchor.click();
      
        // Release the URL and remove the anchor tag
        URL.revokeObjectURL(blobURL);
      
        // Show a success message
        props.showAlert("Text downloaded successfully!", "success");
    }

    const handleClearText = () => {
        setText('');
        props.showAlert("Text is cleared!", "success");
    }

    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#002B36'}}>
        <h3 className='my-2'>Try Text Utilities - Word Counter | Character Counter</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0D3743':'white', color: props.mode === 'dark'?'white':'#002B36'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleSentenceCase}>Convert to Sentence Case</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCapitalizeText}>Convert to Capitalized Case</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handlePaste}>Paste</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#002B36'}}>
        <h3>Your Text Summary</h3>
        <p>Character Count: <b>{text.length}</b> | Word Count:{" "} <b>{text.split(" ").filter((element) => element.trim() !== "").length}</b>{" "} | Line Count: <b>{text.split("\n").length}</b></p>
        <p><b>{(0.008 * text.split(" ").filter((element) => {return element.length!==0}).length).toFixed(3)}</b> minutes read</p>
        <h3>Preview</h3>
        <p className='text-muted'>{text.length > 0?text:'Nothing to preview!'}</p>
    </div>
    
    </>
    );
}
