import { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(value) {
    setMode(value)
  }

  
  

  return { mode, transition };
}