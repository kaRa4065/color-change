import { useState } from "react";
import "./App.css";
import Content from "./Content";

function App() {
  const [color, setColor] = useState("");
  const [isDarkColor, setIsDarkColor] = useState(true);
  const [hexValue, setHexValue] = useState("");
  const [backColor, setBackColor] = useState(true);
  const [emptyFont, setEmptyFont] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkColor(!isDarkColor);
    setBackColor(!backColor);
    setEmptyFont(!emptyFont);
  };

  return (
    <div className="App">
      <Content
        color={color}
        setColor={setColor}
        handleClick={handleClick}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkColor={isDarkColor}
        setIsDarkColor={setIsDarkColor}
        backColor={backColor}
        setBackColor={setBackColor}
        emptyFont={emptyFont}
        setEmptyFont={setEmptyFont}
      />
    </div>
  );
}

export default App;
