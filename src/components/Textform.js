import React, { useState } from 'react';




export default function Textform(props) {
    
  console.log(props.mode)
    const handleUpClick=()=>{
        if(text.length===0){
            console.log("hiiiiiiiiiiiiiiiiiiiiii")
            props.showAlert("Please enter the string","danger")
        }
        else{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert it to uppercase","success")
        }
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handledownClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Convert it to lowercase","success")
    }

    const reduceToZero=(event)=>{
        setText("");
    }
    const handleCopy =()=>{

       var text = document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);

    }
    const removeExtraSpaces  = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text, setText]= useState('Enter text here');
    const colorob= {color: props.mode==='dark'?"white":"grey"}
    return (
            <>
                <div className= "container" style={colorob}>  
                    <h1>{props.heading}</h1>
                        <div className="mb-3">
                            <textarea className="form-control" value ={text} onChange={handleOnChange}  style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} id="mybox" rows="12">
                            </textarea>
                        </div>
                    <button className="btn btn-primary mx-1" style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} onClick={handleUpClick}>convert to upper case</button>
                    <button className="btn btn-primary mx-1" style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} onClick={handledownClick}>convert to lower case</button>
                    <button className="btn btn-primary mx-1" style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} onClick={reduceToZero}>Clear text</button>
                    <button className="btn btn-primary mx-1" style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} onClick={handleCopy}> copy text</button>
                    <button className="btn btn-primary mx-1" style ={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='dark'?"white":"grey"}} onClick={removeExtraSpaces}>Remove extra spaces</button>
                    </div>
                    <div>
                </div>   
                <div className="container my-3" style={{color: props.mode==='dark'?"white":"black"}} >
                    <h2> your text summary</h2>
                    <p>{text.split(" ").length} and character {text.length}</p>
                </div>       
            </>
    )
}