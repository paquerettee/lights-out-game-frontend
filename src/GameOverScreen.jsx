import { HeaderH1, Button } from "./ReusableComponents";

export function GameOverScreen({ steps, restartGame }) {
  return (
    <>
      <HeaderH1>Game over!</HeaderH1>
      <p>You needed only {steps} steps to complete! </p>
      <Button onClick={() => restartGame()}>Play again!</Button>
    </>
  );
}
