import React from "react";
import './Rules.css';

const Rules = () => {
  return (
    <div className="rules-container">
      <h2 className="rules-heading">Rules of Game</h2>
      <ul className="rules-list">
        <li>Play on a 3x3 grid.</li>
        <li>Get 3 marks in a row to win.</li>
        <li>Marks can be X or O.</li>
        <li>Game is a draw if the grid is full and no winner.</li>
        <li>Click New Game to start fresh play.</li>
      </ul>
    </div>
  );
};

export default Rules;
