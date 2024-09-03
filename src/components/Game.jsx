import React, { useState } from "react";
import Board from "./Board";
import NewGame from "./NewGame.jsx";
import Swal from "sweetalert2";


const Game = () => {
    
  const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winningLine, setWinningLine] = useState([]);

  const handleClick = (idx) => {
    if (board[idx] || gameOver) return;

    const newBoard = board.slice();
    newBoard[idx] = isXTurn ? "X" : "O";
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      Swal.fire(`${winner} is the winner!`, "", "success");
      setGameOver(true);
    } else if (newBoard.every((cell) => cell)) {
      Swal.fire("It's a Draw!", "", "info");
      setGameOver(true);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const checkWinner = (board) => {
    for (let [a, b, c] of WINNING_COMBOS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningLine([a, b, c]);
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setGameOver(false);
    setWinningLine([]);
  };

  return (
    <div className="game-container">
      <Board board={board} winningLine={winningLine} handleClick={handleClick} />
      <h2>{gameOver ? "Game Over!" : `Now '${isXTurn ? "X" : "O"}' will play`}</h2>
      <NewGame resetGame={resetGame} />
    </div>
  );
};

export default Game;
