import logo from './logo.svg';
import './App.css';

function Button({textValue = 'A'}) {
  return (
    <button>{textValue}</button>
  );
}

function InputField() {
  return (
    <input type="text" placeholder='0'></input>
  );
}

function ButtonGroup() {
  return (
    <div>

    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="InputField">
        <InputField />
      </div>


      <div className="btnGroup">
        <Button textValue="7"/>
        <Button textValue="8"/>
        <Button textValue="9"/>
        <Button textValue="/"/>
        <Button textValue="4"/>
        <Button textValue="5"/>
        <Button textValue="6"/>
        <Button textValue="X"/>
        <Button textValue="1"/>
        <Button textValue="2"/>
        <Button textValue="3"/>
        <Button textValue="-"/>
        <Button textValue="CLR"/>
        <Button textValue="0"/>
        <Button textValue="="/>
        <Button textValue="+"/>
      </div>
    </div>
  );
}

export default App;
