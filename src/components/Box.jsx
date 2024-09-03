import React from "react";

const Box = ({ value, onClick, highlight }) => {
  const boxStyle = value ? `box ${value}` : "box";
  const highlightClass = highlight ? "highlight" : "";
  return (
    <button
      className={`${boxStyle} ${highlightClass}`}
      onClick={onClick}
      disabled={!!value}
    >
      {value}
    </button>
  );
};


export default Box;