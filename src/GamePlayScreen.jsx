import { useEffect, useState } from "react";
import { GameOverScreen } from "./GameOverScreen";

export function GamePlayScreen() {
  let boardSize = 3;
  let level = 3;
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [steps, setSteps] = useState(0);

  function generateSolvableBoard(boardSize, level = 3) {
    let grid = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
    for (let i = 0; i < level; i++) {
      let x = Math.floor(Math.random() * (boardSize - 1));
      let y = Math.floor(Math.random() * (boardSize - 1));
      grid[x][y] = true;
    }
    return grid;
  }

  function switchPoints(x, y) {
    const grid = board.map((row) => [...row]); // deep copy
    for (let [i, j] of [
      [x, y],
      [x, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x, y + 1],
    ])
      if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) grid[i][j] = !grid[i][j];
    setBoard(grid);
  }

  function checkBoard() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j]) {
          setGameOver(false);
          return;
        }
      }
    }
    setGameOver(true);
  }

  useEffect(() => {
    setBoard(generateSolvableBoard(boardSize, level));
  }, []);

  useEffect(() => {
    checkBoard();
  }, [board]);

  return (
    <>
      {!gameOver ? (
        <div className="flex flex-col gap-1">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  className={`w-10 h-10 border ${cell ? "bg-yellow-300" : "bg-gray-300"}`}
                  onClick={() => {
                    switchPoints(rowIndex, colIndex);
                    setSteps((steps) => steps + 1);
                  }}
                ></button>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <GameOverScreen />
      )}
    </>
  );
}
