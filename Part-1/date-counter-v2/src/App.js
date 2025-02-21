import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleDecreaseCount() {
    setCount((c) => c - step);
  }
  function handleIncreaseCount() {
    setCount((c) => c + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
          console.log("New Step value is", step);
        }}
      />
      <span>Step:{step}</span>
      <br />
      <button onClick={handleDecreaseCount}>-</button>
      {/* <p>Count:{count}</p> */}
      <input
        type="text"
        value={count}
        onChange={(e) => {
          setCount(Number(e.target.value));
          console.log("New Count value is", count);
        }}
      />
      <button onClick={handleIncreaseCount}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
