export function WelcomeScreen({ setStarted }) {
  return (
    <>
      <h1 className="text-blue-300 pb-6">Lights out!</h1>
      <p>Your goal is to turn off all the lights.</p>
      <p>Each move toggles a cell and its neighbors.</p>
      <p>Try to solve the puzzle in as few moves as possible!</p>
      <button onClick={() => setStarted(true)} className="uppercase text-white">
        Play
      </button>
    </>
  );
}
