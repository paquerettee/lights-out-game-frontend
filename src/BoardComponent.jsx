import { useState, useEffect, useRef } from "react";

export function BoardComponent({ level, playNextLevel, setSteps }) {
  let boardSize = 3;
  const [board, setBoard] = useState([]);
  const hasInitialized = useRef(false);

  function generateSolvableBoard() {
    console.log("grid");
    let grid;
    do {
      grid = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
      for (let i = 0; i < level; i++) {
        let x = Math.floor(Math.random() * boardSize);
        let y = Math.floor(Math.random() * boardSize);
        console.log(y, x);
        grid = switchPoints(grid, x, y);
      }
    } while (!checkIfAnyTrue(grid)); // to ommit boards with nothing to be done
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

  function checkIfAnyTrue(grid) {
    return grid.some((row) => row.some((cell) => cell));
  }

  useEffect(() => {
    if (!hasInitialized.current) {
      generateSolvableBoard();
      hasInitialized.current = true;
    }
  }, [level]);

  useEffect(() => {
    if (board.length > 0) {
      if (!checkIfAnyTrue(board)) playNextLevel();
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
