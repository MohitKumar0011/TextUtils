import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleClearClick = () => {
    console.log("Clear text clicked");
    let newText = "";
    setText(newText);
  };
  const handleCopyText = () => {
    console.log("Copy text clicked");
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  var noOfWords= text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
  var noOfChar = text.length;
  if (noOfChar===0) {
    noOfWords=0;
  }
  const handleCountClick = () => {
    console.log("Characters per words was clicked");
    alert(`The noumber of characters per word are ${noOfChar/noOfWords}`);
  };
  // if we dont use the above logic then for an empty text box the no os words would have been 1
  //text="new text"  //Wrong way to change the state
  //setText("new text") //Correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#1f1962':'white' , color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCountClick}>
          Characters per word
        </button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{noOfWords} words and {noOfChar} characters</p>
        <p>{0.008 * noOfWords} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the box to preview"}</p>
      </div>
    </>
  );
}
