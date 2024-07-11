import React,{useState} from 'react'

export default function TextForm(props) {
const hundlerButtonClick=()=>{
    
    setText(text.toUpperCase());
};
const hundlerButton=(e)=>{
    setText(e.target.value);
}
    const[text,setText]=useState('enter your name');
  

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={hundlerButton}  id="myBox" rows="8"></textarea>
        </div>
        <div className="button btn btn-primary" onClick={hundlerButtonClick}>Convert to UpperCase</div>


    </div>
  )
}
