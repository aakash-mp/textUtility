import React, {useState} from 'react'
export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
        
    }

    const handleUpClick =()=>{
        console.log("upper case was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase","success");
    }

    const handleLowClick =()=>{
        console.log("lower case was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }

    const handleClearClick =()=>{
        console.log("clear text was clicked");
        let newText= '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopyClick =()=>{
        console.log("copy text was clicked");
        navigator.clipboard.writeText(text);
        //alert("text copied");
        props.showAlert("Text copied","success");
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#16325c'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='dark'?'white':'#16325c'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-1 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-1 mx-1.5" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-1 mx-2" onClick={handleCopyClick}>Copy Text</button>


        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#16325c'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element) =>{return element.length!==0}).length} minutes to read this </p>
            <h3>PREVIEW</h3>
            <p>{text}</p>

        </div>
        </>
    )
}
