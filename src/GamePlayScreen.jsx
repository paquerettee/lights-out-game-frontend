import { useState } from "react";
import { GameOverScreen } from "./GameOverScreen";
import { BoardComponent } from "./BoardComponent";
import { HeaderH2 } from "./ReusableComponents";

export function GamePlayScreen() {
  let level = 2;
  const [gameOver, setGameOver] = useState(false);
  const [steps, setSteps] = useState(0);

  function restartGame() {
    setGameOver(false);
    setSteps(0);
  }
  return (
    <>
      {!gameOver ? (
        <>
          <div className="flex flex-col justify-center">
            <HeaderH2>Let's play!</HeaderH2>
            <BoardComponent level={level} setGameOver={setGameOver} setSteps={setSteps} />
          </div>
        </>
      ) : (
        <GameOverScreen steps={steps} restartGame={restartGame} />
      )}
    </>
  );
}
