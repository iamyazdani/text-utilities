import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("On change");
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
            return setText(sentenceCaseText);
        }
    }
    
    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleCapitalizeText = () => {
        
    }

    const handleCopyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handlePaste = () => {
        // const pastedData = text.clipboardData.getData('text');
        // setText(pastedData);
    }
    
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleDownload = () => {
        
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
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handlePaste}>Paste</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>
        <button type="button" className="btn btn-outline-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>Character Count: <b>{text.length}</b> | Word Count: <b>{text.split(" ").length}</b> | Line Count: <b></b></p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes read</p>
        <h3>Preview</h3>
        <p className='text-muted'>{text}</p>
    </div>
    </>
    );
}
