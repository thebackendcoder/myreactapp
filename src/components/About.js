import React, { useState } from 'react'


export default function About() {

     const [mystile ,setMyStyle]= useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText ,setBtnText]= useState("enable Dark dark mode")

    let toggleStyle =()=>{
        if(mystile.color=== 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })

            setBtnText("enable Dark mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("enable light mode")
        }
    }

    let handleOnChange =(event)=>{
            console.log(event.target.value)
    }

    return (
        <div className="container" style ={mystile}>
            <h1 className="my-2">About Us</h1>
            <div className="accordion my-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" style ={mystile} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Us
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" style ={mystile} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This was build by kashif Kalam </strong> This was build by kashif kalam who was the backend code learning front end his first application about the text UTil
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-1">
                <button  onClick={toggleStyle}  className="btn btn-primary mx-1">{btnText}</button>
            </div>
        </div>
    )
}