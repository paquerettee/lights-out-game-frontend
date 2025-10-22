import { HeaderH1, Button } from "./ReusableComponents";

export function GameOverScreen({ level, steps, restartGame }) {
  return (
    <>
      <HeaderH1>Game over!</HeaderH1>
      <p>Congratulations! You reached level {level}</p>
      <p>You needed only {steps} steps to complete! </p>
      <Button onClick={() => restartGame()}>Play again!</Button>
    </>
  );
}
