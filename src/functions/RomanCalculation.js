// Roman Calculation Component
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Calculation from './calculation.js'
import testRoman from './testRoman.js';
import roman_to_Int from './roman_to_Int.js';

export default class RomanCalculation extends Component {
    state = { 
        value1:"",
        value2:"",
        roman1:"",
        roman2:"",
        operator:"+",
        answer :'',
        note:''
       }

       setRoman =id => ({ target: { value } }) => {
        if(testRoman(value)){
            this.setState({
              [`roman${id}`]: value,
              [`value${id}`]: roman_to_Int(value)
            });
        }
          }
          setOperator = (x) => {
            this.setState({
              operator:x.target.value
            })
            ;
          }
          Total = ()=>{
            let Calc = Calculation(this.state.roman1,this.state.roman2,this.state.operator);
            if(Calc===-2){
            this.setState({
                note:'(Roman Numbers cannot be negative)',
                answer:''
               }); 
            }
            else if(Calc===-1){
                this.setState({
                    note:'Roman Numbers not filled',
                    answer:''
                   }); 
                }
            else if(Calc==='too high'){
                this.setState({
                    note:'(Number too high!! Max number 3999)',
                    answer:''
                   });   
            }
            else{
                this.setState({
                    note:'',
                    answer:Calc
                   });
            }
            }       
     
render()
{
    return(
<div>

<label className ="Title">{this.props.title}</label>
        <br></br>
        <br></br>
        <label> {this.props.input1} </label>
        <input className ="input" type = "text" value = {this.state.roman1} onChange = {this.setRoman(1)} ></input>
        <br></br>
        <select className ="selector" value = {this.state.operator} onChange = {this.setOperator} >   
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="X">X</option>

</select>
<br></br>
<label> {this.props.input2} </label>
        <input className ="input" type = "text" value = {this.state.roman2} onChange = {this.setRoman(2)} ></input> 
        <br></br>

<input className="button" type ="button" onClick={this.Total} value = {this.props.buttonName} ></input>
<div> <label>Answer {this.state.note} : {this.state.answer}</label> </div>
</div>
    );
}
}

RomanCalculation.propTypes =
{
  input1: PropTypes.string,
  input2: PropTypes.string,
  title: PropTypes.string,
  buttonName: PropTypes.string,
}

RomanCalculation.defaultProps =
{
  input1: "Enter first Roman Number :",
  input2: 'Enter second Roman Number :',
  title: "ROMAN CALCULATOR",
  buttonName: "Calculate",
 
}

///Written by Karan Nandkumar
