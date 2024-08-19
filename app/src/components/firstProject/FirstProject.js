import './firstProject.css'
import React, { useState } from "react";

function FirstProject (){

	const [text, setText] = useState("");
	const [inputSize, setInputSize] = useState('16px');
	const [color, setColor] = useState('black');
	const  handleChangeText = (e) =>{
		console.log(e.target.value);
		setText(e.target.value);
	}
	const handleSizeText = (e) =>{
		console.log(e.target.value);
		setInputSize(e.target.value + "px");
	}
	const handleColorChange = (e) => {
		console.log(e.target.value);
		setColor(e.target.value);
	}
	
	return(
	
		
		
		
	
		<div>
		<form>
				
					<input type = 'text'  onChange={(e) => handleChangeText(e)} />
					<input  type='number' onChange = {(e)=>handleSizeText(e)}/> 
					<select onChange = {(e)=>handleColorChange(e)}>
					<option>green</option>
					<option>pink</option>
					<option>black</option>
					
					
					</select>
					<button>save</button>
					
		</form>
		<p style={{ fontSize: inputSize, color: color }}>{text}</p>
		</div> 

	)
}
export default FirstProject;