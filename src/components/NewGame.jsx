import React from "react";

const NewGame = ({ resetGame }) => (
  <button className="btn" onClick={resetGame}>
     New Game
  </button>
);

export default NewGame
