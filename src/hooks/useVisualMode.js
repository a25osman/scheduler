import { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value, replace = false) {
    if (replace) {
      let array = [...history]
      array.pop();
      setHistory(() => [...array, value]);
      setMode(value)
      return;
    }
    setMode(() => value);
    setHistory((prev) => [...prev, value]);
  }


  function back() {
    if (history.length > 1){
      let array = [...history];
      array.pop();
      setHistory(() => array);
      setMode(() => array[array.length - 1]);
    }
  }

  return { mode, transition, back };
}