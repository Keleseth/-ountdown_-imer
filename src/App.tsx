import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check === true) {
      if (count[3] === 0) {
        setCount([count[0], count[1], count[2] - 1, (count[3] = 59)]);
      }
      if (count[2] === 0) {
        setCount([count[0], count[1] - 1, (count[3] = 59), count[3]]);
      }
      if (count[1] === 0) {
        setCount([count[0] - 1, (count[1] = 24), count[2], count[3]]);
      }

      setTimeout(() => {
        setCount([count[0], count[1], count[2], count[3] - 1]);
      }, 1000);
    }
  }, [count, check]);

  const initialValue = (e: any) => {
    setValue(e.target.value);
  };

  const submitValue = (e: any) => {
    e.preventDefault();
    const arrStr: string[] = value.split(":");
    const arrNbr: number[] = arrStr.map(Number);
    setCount([...arrNbr]);
  };

  const startTimer = (e: any) => {
    e.preventDefault();
    setCheck(true);
  };

  const stopTimer = (e: any) => {
    e.preventDefault();
    setCheck(false);
  };
  const refreshTimer = (e: any) => {
    e.preventDefault();
    setCheck(false);
    setCount([0, 0, 0, 0]);
  };

  return (
    <div>
      <form>
        <div>Correct: DD:HH:MM:SS</div>
        <label htmlFor="days"></label>
        <input type="text" id="days" onChange={(e: any) => initialValue(e)} />
        <button onClick={(e: any) => submitValue(e)}>Add Value</button>
      </form>
      <button onClick={(e: any) => startTimer(e)}>Start</button>
      <button onClick={(e: any) => stopTimer(e)}>Stop</button>
      <button onClick={(e: any) => refreshTimer(e)}>Refresh</button>
      <div>Days - Hours - Minutes - Seconds</div>
      <div>
        {count[0]}:{count[1]}:{count[2]}:{count[3]}
      </div>
    </div>
  );
};

export default App;
