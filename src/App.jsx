import "./App.css";
import { useState } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { GamePlayScreen } from "./GamePlayScreen";

function App() {
  const [started, setStarted] = useState(false);

  return <div>{!started ? <WelcomeScreen setStarted={setStarted} /> : <GamePlayScreen />}</div>;
}

export default App;
