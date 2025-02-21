# Building the Layout

App.js

```js
export default function App() {

  return (

    <div className="app">

      <Logo />

      <Form />

      <PackingList />

      <Stats />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form() {

  return (

    <div className="add-form">

      <h3>What do you need for your 😍 trip ?</h3>

    </div>

  );

}

function PackingList() {

  return <div className="list">LIST</div>;

}

function Stats() {

  return (

    <footer className="stats">

      <em>💼 You have X items on your list , and you already packed X (X%)</em>

    </footer>

  );

}

```

index.css

```css
/*

const initialItems = [

  { id: 1, description: "Passports", quantity: 2, packed: false },

  { id: 2, description: "Socks", quantity: 12, packed: false },

];

*/

@import url("https://fonts.googleapis.com/css2?family=Monoton&family=Quicksand:wght@500;700&display=swap");

* {

  margin: 0;

  padding: 0;

  box-sizing: border-box;

}

html {

  font-size: 62.5%;

}

body {

  font-size: 2.4rem;

  font-family: sans-serif;

  color: #5a3e2b;

  font-family: "Quicksand";

  font-weight: 500;

}

.app {

  width: 100%;

  height: 100vh;

  display: grid;

  grid-template-rows: auto auto 1fr auto;

}

h1 {

  text-align: center;

  background-color: #f4a226;

  font-family: "Monoton";

  font-size: 8rem;

  text-transform: uppercase;

  font-weight: 400;

  word-spacing: 30px;

  letter-spacing: -5px;

  padding: 2.4rem 0;

}

.add-form {

  background-color: #e5771f;

  padding: 2.8rem 0;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.8rem;

}

h3 {

  margin-right: 1.6rem;

  font-size: 2.4rem;

}

button,

select,

input {

  background-color: #ffebb3;

  color: #5a3e2b;

  font-family: inherit;

  border: none;

  border-radius: 10rem;

  padding: 1.2rem 3.2rem;

  font-weight: 700;

  font-size: 1.8rem;

  cursor: pointer;

}

.add-form button {

  text-transform: uppercase;

  background-color: #76c7ad;

}

.list {

  background-color: #5a3e2b;

  color: #ffebb3;

  padding: 4rem 0;

  display: flex;

  justify-content: space-between;

  flex-direction: column;

  gap: 3.2rem;

  align-items: center;

}

.actions button,

.list select {

  text-transform: uppercase;

  padding: 0.8rem 2.4rem;

  font-size: 1.4rem;

  font-weight: 700;

  margin: 0 0.8rem;

}

.list ul {

  list-style: none;

  width: 80%;

  overflow: scroll;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 1.2rem;

  justify-content: center;

  align-content: start;

}

.list li {

  display: flex;

  align-items: center;

  gap: 1.2rem;

}

input[type="checkbox"] {

  height: 2rem;

  width: 2rem;

  accent-color: #e5771f;

}

.list li button {

  cursor: pointer;

  background: none;

  border: none;

  font-size: 1.8rem;

  padding: 0.8rem;

  transform: translateY(2px);

}

.stats {

  background-color: #76c7ad;

  text-align: center;

  font-weight: 700;

  padding: 3.2rem 0;

}

```

# Rendering the Item List

App.js

```js
const initialItems = [

  { id: 1, description: "Passports", quantity: 2, packed: false },

  { id: 2, description: "Socks", quantity: 12, packed: true },

  { id: 2, description: "Charger", quantity: 1, packed: false },

];

export default function App() {

  return (

    <div className="app">

      <Logo />

      <Form />

      <PackingList />

      <Stats />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form() {

  return (

    <div className="add-form">

      <h3>What do you need for your 😍 trip ?</h3>

    </div>

  );

}

function PackingList() {

  return (

    <div className="list">

      <ul>

        {initialItems.map((item) => (

          <Item item={item} />

        ))}

      </ul>

    </div>

  );

}

function Item({ item }) {

  return (

    <li>

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>

        {item.quantity}

        {item.description}

      </span>

      <button>❌</button>

    </li>

  );

}

function Stats() {

  return (

    <footer className="stats">

      <em>💼 You have X items on your list , and you already packed X (X%)</em>

    </footer>

  );

}

```

# Building a Form and Handling Submissions

We use the HTML form element 

To create a bunch of options we use this trick which is used all over in React basically creating a array of 20 elements then mapping it into <options>

![](../../assets/options.png)

We can submit the Form by clicking on the submit button or hitting the enter key when we listen for event handlers on the form .In Single page applications we usually can submit a form without the page reloading . So we disable the default behavior of HTML. As soon as the submit event happens React will call handleSubmit function and when it does so it will pass into the function the event object (object with all the information about the current event) , Similar to what happens in vanilla js , If we listened only on onClick Event then the enter would not be captured

```js
  function Form() {

  function handleSubmit(e) {

    e.preventDefault();

    console.log(e);

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select>

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input type="text" placeholder="Item..." />

      <button>Add</button>

    </form>

  );

}

```
