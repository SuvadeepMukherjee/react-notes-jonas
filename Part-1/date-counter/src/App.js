import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }
  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }
  function handleDecreaseCount() {
    setCount((c) => c - step);
  }
  function handleIncreaseCount() {
    setCount((c) => c + step);
  }

  // Calculate the future date
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + count);

  // Format the date
  const formattedDate = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div>
      <button onClick={handleDecreaseStep}>-</button>
      <p>Step:{step}</p>
      <button onClick={handleIncreaseStep}>+</button>
      <br />
      <button onClick={handleDecreaseCount}>-</button>
      <p>Count:{count}</p>
      <button onClick={handleIncreaseCount}>+</button>
      <p>
        {count} days from today is {formattedDate}
      </p>
    </div>
  );
}

export default App;
