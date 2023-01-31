import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Button({textValue = 'A', onClick}) {
  return (
    <button onClick={onClick}>
    {textValue}
    </button>
  );

}


function InputField({display}) {
  return (
    <div>
      {display}
    </div>
  );
}


function App() {
  //And so begins my experiment with states
  const [disp, setDisp] = useState("0");
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0")
  const [operator, setOp] = useState(null);


  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    // alert(value);
    
    if (operator != null) {
      if (num2 == "0") {
        setNum2(value);
        setDisp(value);
      }
      else {
        let cumulativeValue = num2 + value;
        setNum2(cumulativeValue);
        setDisp(cumulativeValue);
      }
    }

    else {
      if (num1 == "0") {
        setNum1(value);
        setDisp(value);
      }
      else {
        let cumulativeValue = num1 + value
        setNum1(cumulativeValue);
        setDisp(cumulativeValue);
      }
      
    }


  };

  const clearClickHandler = () => {
    setNum1("0");
    setNum2("0");
    setDisp("0");
    setOp(null);
    console.log(disp);
  };

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setOp(value);
    setDisp(value);
  }

  const equalClickHandler = () => {
    let iNum1 = parseInt(num1);
    let iNum2 = parseInt(num2);

    let result = 0;
    switch(operator) {
      case "+":
        result = iNum1 + iNum2;
        break;
      case "-":
        result = iNum1 - iNum2;
        break;
      case "*":
        result = iNum1 * iNum2;
        break;
      case "/":
        result = iNum1 / iNum2;
        break;
    }

    setDisp(result);
    setNum1(result);
    setNum2(0);
    setOp(null);
  }

  return (
    <div className="App">
      <div className="InputField">
        <InputField display={disp}/>
      </div>


      <div className="btnGroup">
        <Button textValue="7" onClick={numberClickHandler}/>
        <Button textValue="8" onClick={numberClickHandler}/>
        <Button textValue="9" onClick={numberClickHandler}/>
        <Button textValue="/" onClick={opClickHandler}/>

        <Button textValue="4" onClick={numberClickHandler}/>
        <Button textValue="5" onClick={numberClickHandler}/>
        <Button textValue="6" onClick={numberClickHandler}/>
        <Button textValue="*" onClick={opClickHandler}/>

        <Button textValue="1" onClick={numberClickHandler}/>
        <Button textValue="2" onClick={numberClickHandler}/>
        <Button textValue="3" onClick={numberClickHandler}/>
        <Button textValue="-" onClick={opClickHandler}/>

        <Button textValue="CLR" onClick={clearClickHandler}/>
        <Button textValue="0" onClick={numberClickHandler}/>
        <Button textValue="=" onClick={equalClickHandler}/>
        <Button textValue="+" onClick={opClickHandler}/>
      </div>
    </div>
  );
}

export default App;
