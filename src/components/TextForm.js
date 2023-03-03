import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick= (event)=>{
        console.log("Uppercase clicked");
        setText(text.toUpperCase());
        props.showAlert('Uppercase Clicked','success');
    }
    const handleLowClick= (event)=>{
        console.log("Lowercase clicked");
        setText(text.toLowerCase());
        props.showAlert('Lowercase Clicked','success');
    }
    const handleClearClick = (event) =>{
        setText("")
        props.showAlert('Text is cleared','warning');
    }
    const handleOnChange= (event)=>{
        console.log("On change  clicked");
        setText(event.target.value);
    }
    const handleCopyClick =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Text is copied','success');
    }
    const handleExtraSpacesClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert('Extra spaces removed','success');
    }
    const [text,setText] = useState('')
    return (
        <>
            <div className="container">
                <h2 style ={{
                    color : props.mode =="light" ? "black" : "white"
                }}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode =="light" ? "white" : "grey",
                      color : props.mode =="light" ? "black" : "white"
                    }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary " onClick={handleExtraSpacesClick}>Remove Extra Text</button>
            </div>
            <div className="container my-4" style ={{
                    color : props.mode =="light" ? "black" : "white"
                }}>
                <h2>Your text is here</h2>
                <p> {text.length ==0 ? 0 : text.split(" ").length} words and {text.length} characters</p>
                <p> {text.length ==0 ? 0: 0.008 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            
        </>
    
    )
}
