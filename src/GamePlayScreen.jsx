import { useState } from "react";
import { GameOverScreen } from "./GameOverScreen";
import { NextLevelScreen } from "./NextLevelScreen";
import { BoardComponent } from "./BoardComponent";
import { HeaderH2 } from "./ReusableComponents";

export function GamePlayScreen() {
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [levelIntro, setLevelIntro] = useState(true);
  const [steps, setSteps] = useState(0);

  function playNextLevel() {
    if (level < 5) {
      setSteps(0);
      setLevelIntro(true);
      setLevel((level) => level + 1);
    } else setGameOver(true);
  }

  function restartGame() {
    setGameOver(false);
    setLevel(1);
    setSteps(0);
  }

  return (
    <>
      {!gameOver ? (
        levelIntro ? (
          <NextLevelScreen level={level} setLevelIntro={setLevelIntro}></NextLevelScreen>
        ) : (
          <div className="flex flex-col justify-center">
            <HeaderH2>Level {level}</HeaderH2>
            <BoardComponent level={level} playNextLevel={playNextLevel} setSteps={setSteps} />
          </div>
        )
      ) : (
        <GameOverScreen level={level} steps={steps} restartGame={restartGame} />
      )}
    </>
  );
}
