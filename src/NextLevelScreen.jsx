import { useEffect } from "react";
import { HeaderH1 } from "./ReusableComponents";

export function NextLevelScreen({ level, setLevelIntro }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLevelIntro(false);
    }, 2000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  return <HeaderH1 className="animate-grow">Level {level}</HeaderH1>;
}
