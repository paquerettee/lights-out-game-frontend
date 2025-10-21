import { HeaderH1, Button } from "./ReusableComponents";

export function WelcomeScreen({ setStarted }) {
  return (
    <>
      <HeaderH1>Lights out!</HeaderH1>
      <p>Your goal is to turn off all the lights.</p>
      <p>Each move toggles a cell and its neighbors.</p>
      <p>Try to solve the puzzle in as few moves as possible!</p>
      <Button onClick={() => setStarted(true)}>Play</Button>
    </>
  );
}
