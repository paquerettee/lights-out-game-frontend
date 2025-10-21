import { useState, useEffect, useRef } from "react";

export function BoardComponent({ level, setGameOver, setSteps }) {
  let boardSize = 3;
  const [board, setBoard] = useState([]);
  const hasInitialized = useRef(false);

  function generateSolvableBoard() {
    let grid = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
    for (let i = 0; i < level; i++) {
      let x = Math.floor(Math.random() * boardSize);
      let y = Math.floor(Math.random() * boardSize);
      grid = switchPoints(grid, x, y);
    }
    setBoard(grid);
  }

  function switchPoints(grid, x, y) {
    const updatedGrid = grid.map((row) => [...row]); // deep copy
    for (let [i, j] of [
      [x, y],
      [x, y - 1],
      [x - 1, y],
      [x + 1, y],
      [x, y + 1],
    ])
      if (i >= 0 && i < updatedGrid.length && j >= 0 && j < updatedGrid[0].length)
        updatedGrid[i][j] = !updatedGrid[i][j];
    return updatedGrid;
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
    if (!hasInitialized.current) {
      generateSolvableBoard();
      hasInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (board.length > 0) {
      checkBoard();
      hasInitialized.current = false;
    }
  }, [board]);

  return (
    <>
      <div className="flex flex-col gap-1">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1  justify-center">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                // className={`w-10 h-10 border ${cell ? "bg-yellow-300" : "bg-gray-300"}`}
                className={`w-20 h-20 border ${cell ? "bulb-on" : "bulb-off"}`}
                onClick={() => {
                  setBoard(switchPoints(board, rowIndex, colIndex));
                  setSteps((steps) => steps + 1);
                }}
              ></button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
