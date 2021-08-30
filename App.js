import { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const updateDisplay = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    const input = text.join(""); 

    setResult(math.evaluate(input));
  };

  const reset = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calc">
        <Display text={text} result={result} />
        <div className="row">
          <Button symbol="7" buttonClicked={updateDisplay} />
          <Button symbol="8" buttonClicked={updateDisplay} />
          <Button symbol="9" buttonClicked={updateDisplay} />
          <Button symbol="/" buttonClicked={updateDisplay} />
        </div>
        <div className="row">
          <Button symbol="4" buttonClicked={updateDisplay} />
          <Button symbol="5" buttonClicked={updateDisplay} />
          <Button symbol="6" buttonClicked={updateDisplay} />
          <Button symbol="*" buttonClicked={updateDisplay} />
        </div>
        <div className="row">
          <Button symbol="1" buttonClicked={updateDisplay} />
          <Button symbol="2" buttonClicked={updateDisplay} />
          <Button symbol="3" buttonClicked={updateDisplay} />
          <Button symbol="+" buttonClicked={updateDisplay} />
        </div>
        <div className="row">
          <Button symbol="0" buttonClicked={updateDisplay} />
          <Button symbol="." buttonClicked={updateDisplay} />
          <Button symbol="=" buttonClicked={calculateResult} />
          <Button symbol="-" buttonClicked={updateDisplay} />
        </div>
        <Button symbol="Clear" buttonClicked={reset} />
      </div>
    </div>
  );
};

export default App;