# Lets Build a Steps Component

Usually we use a component App as the root component of our application(App Component is the parent component of all the other components)

App.js

```js
const messages = [

  "Learn React ⚛️",

  "Apply for jobs 💼",

  "Invest your new income 🤑",

];

export default function App() {

  const step = 2;

  return (

    <div className="steps">

      <div className="numbers">

        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>

        <div className={`${step >= 3 ? "active" : ""}`}>3</div>

      </div>

      <p className="message">

        Step {step}:{messages[step - 1]}

      </p>

      <div className="buttons">

        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>

          Previous

        </button>

        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>

          Next

        </button>

      </div>

    </div>

  );

}
```

index.css

```css
/*

const messages = [

  "Learn React ⚛️",

  "Apply for jobs 💼",

  "Invest your new income 🤑",

];

 */

* {

  box-sizing: border-box;

}

body {

  font-family: sans-serif;

  color: #333;

}

.steps {

  width: 600px;

  background-color: #f7f7f7;

  border-radius: 7px;

  padding: 25px 100px;

  margin: 100px auto;

}

.numbers {

  display: flex;

  justify-content: space-between;

}

.numbers > div {

  height: 40px;

  aspect-ratio: 1;

  background-color: #e7e7e7;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 18px;

}

.numbers .active {

  background-color: #7950f2;

  color: #fff;

}

.message {

  text-align: center;

  font-size: 20px;

  margin: 40px 0;

  font-weight: bold;

  display: flex;

  flex-direction: column;

  align-items: center;

}

.buttons {

  display: flex;

  justify-content: space-between;

}

.buttons button {

  border: none;

  cursor: pointer;

  padding: 10px 15px;

  border-radius: 100px;

  font-size: 14px;

  font-weight: bold;

  display: flex;

  align-items: center;

  gap: 10px;

}

.buttons button span {

  font-size: 16px;

  line-height: 1;

}

h3 {

  margin: 0;

  text-transform: uppercase;

}

.close {

  position: absolute;

  top: 16px;

  right: 16px;

  border: none;

  background: none;

  cursor: pointer;

  font-size: 40px;

  color: inherit;

}

.close:hover {

  color: #7950f2;

}
```

index.js

```js
import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
```

# Handling Events the React Way

We do not use addEventListener in React because that is the imperative way of building UIs in React we use a more declarative approach. We will directly listen for the event right on the element where they will happen . we need to write it in camel case we pass in a function and that function will now be executed whenever there is a click happening on the DOM

```jsx
<button

          style={{ backgroundColor: "#7950f2", color: "#fff" }}

          onClick={() => alert("Previous")}

        >

          Previous

        </button>
```

It is not a function call rather a function.if we called the function then as soon as React initializes this component (App Function ) it will automatically call `alert("TEST)`

```jsx
<button

          style={{ backgroundColor: "#7950f2", color: "#fff" }}

          onClick={() => alert("Previous")}

          //This is wrong

          onMouseEnter={alert("TEST")}

        >

          Previous

        </button>
```

We do not directly define the event handler function right in the onClick prop but instead we create a seperate function and pass it there . We create those eventHandler functions right in the component. The handle part  in the event handler function is pretty standard in React development

App.js

```js
const messages = [

  "Learn React ⚛️",

  "Apply for jobs 💼",

  "Invest your new income 🤑",

];

export default function App() {

  const step = 1;

  function handlePrevious() {

    alert("Previous");

  }

  function handleNext() {

    alert("Next");

  }

  return (

    <div className="steps">

      <div className="numbers">

        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>

        <div className={`${step >= 3 ? "active" : ""}`}>3</div>

      </div>

      <p className="message">

        Step {step}:{messages[step - 1]}

      </p>

      <div className="buttons">

        <button

          style={{ backgroundColor: "#7950f2", color: "#fff" }}

          onClick={handlePrevious}

        >

          Previous

        </button>

        <button

          style={{ backgroundColor: "#7950f2", color: "#fff" }}

          onClick={handleNext}

        >

          Next

        </button>

      </div>

    </div>

  );

}
```

# What is State ?

![](../../assets/state-1.png)

![](../../assets/state-2.png)

![](../../assets/state-3.png)

![](../../assets/state-4.png)

Examples of state can be simple things like a notication count , the text content of an input field or the active tab in a tab component , content of a shopping cart. Each of these components needs to hold this data over time(over the lifecycle of the applicaton). Each of these pieces of information is a piece of state . The term state is more about the entire state(entire condition at a certain point of time)

A components view  is basically just the component visually rendered on the sceen (in the user interface). When one single component is rendered we call that a view . All the views combined together then make up the final user interface. State keeps data in sync with UI(We  change the state , we update the UI)
