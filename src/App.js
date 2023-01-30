export function Button(textValue = 'A') {
  return (
    <button>
      {}
    </button>
  );
}

export function NumberField() {
  return (
    <input type="text" placeholder="0"> </input>
  );
}

export function NumberButton(numValue = '0') {
  return (
      <Button>{numValue}</Button>
  );
}


export function ButtonGroup() {
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
    <div className="App">123
      <NumberField />
      <ButtonGroup />
    </div>
  );
}

export default container;
