import React from "react";
import colorNames from "colornames";

const Content = ({
  color,
  setColor,
  handleClick,
  isDarkColor,
  hexValue,
  setHexValue,

  backColor,

  emptyFont,
}) => {
  return (
    <div style={{ backgroundColor: backColor ? "white" : "black" }}>
      <form>
        {hexValue === undefined || hexValue === "" ? (
          <main>
            <p
              style={{
                paddingTop: "20px",
                color: emptyFont ? "black" : "white",
              }}
            >
              Colorah pota <br /> Color marum
            </p>
          </main>
        ) : (
          <main
            className="input"
            id="textbox"
            style={{
              backgroundColor: color,
              color: isDarkColor ? "#000" : "#fff",
            }}
          >
            <p>{color}</p>

            <p>{hexValue} </p>
          </main>
        )}
        <label htmlFor="colorbox"></label>
        <input
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
          className="input"
          type="text"
          placeholder="Enter color"
          id="userinput"
          autoFocus
        ></input>
        <label htmlFor="userinput"></label>
        <button type="submit" onClick={handleClick}>
          Toggle text color
        </button>
      </form>
    </div>
  );
};

export default Content;
