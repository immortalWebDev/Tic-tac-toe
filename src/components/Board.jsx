import React from "react";
import Box from './Box'

const Board = ({ board, winningLine, handleClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Box
          key={idx}
          value={value}
          highlight={winningLine.includes(idx)}
          onClick={() => value === null && handleClick(idx)}
        />
      ))}
    </div>
  );
};


export default Board;