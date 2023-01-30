import logo from './logo.svg';
import './App.css';

function container() {
  return (
    <div className="container">
      <NumberField />
      <ButtonGroup />
    </div>
  );
}

function NumberField() {
  return (
    <input type="text" placeholder="0"> </input>
  );
}

function NumberButton(numValue = '0') {
  return (
    <div>{numValue}</div>
  );
}


function ButtonGroup() {
  return(
    <div>
      <NumberButton numValue={'7'} />
      <NumberButton numValue={'8'} />
      <NumberButton numValue={'9'} />
      <NumberButton numValue={'4'} />
      <NumberButton numValue={'5'} />
      <NumberButton numValue={'6'} />
      <NumberButton numValue={'1'} />
      <NumberButton numValue={'2'} />
      <NumberButton numValue={'3'} />
    
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default container;
