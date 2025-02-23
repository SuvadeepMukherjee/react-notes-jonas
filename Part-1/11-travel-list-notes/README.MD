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

# Controlled Elements

Input fields maintain their own state inside the DOM (inside the HTML elements itself).In React we usually like to keep all the state in just one central place inside the react application and not inside the DOM .In order to do that we use a technique called controlled elements .With this technique it is react who controls and owns the state of the input fields and no longer the DOM . Since we want to now keep this data inside the application what that means is we need some state(Because that form data of course changes over time and we also want to maintain our application in sync with it).In order to implement the controlled elements technique we follow 3 steps 

1. we create a piece of state

2. now we use the state as a value of our input field

3. listen for the change event on the same element and set it to the setter of the state . Whenever we type something in the input field the change event is fired off and we can react to that event with the onChange eventHandler

```js
function Form() {

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {

    e.preventDefault();

    //gard clause

    if (!description) return; //return if desrciption absent

    //console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    setDescription(""); //reset state to initial state

    setQuantity(1); //reset state to initial state

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select

        value={quantity}

        onChange={(e) => setQuantity(Number(e.target.value))}

      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input

        type="text"

        placeholder="Item..."

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <button>Add</button>

    </form>

  );

}
```

# State vs Props

![](../../assets/state-props.png)

# Flashcards-Exercise

on the onClick event handler we need to pass in an actual function and not a function call(react will call the functions as soon as the event happens)

```js
function FlashCards() {

  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {

    setSelectedId(id !== selectedId ? id : null);

  }

  return (

    <div className="flashcards">

      {questions.map((question) => (

        <div

          key={question.id}

          className={question.id === selectedId ? "selected" : ""}

          onClick={() => handleClick(question.id)}

        >

          <p>

            {question.id === selectedId ? question.answer : question.question}

          </p>

        </div>

      ))}

    </div>

  );

}
```

Entire Code

```js
import { useState } from "react";

import "./styles.css";

export default function App() {

  return (

    <div className="App">

      <FlashCards />

    </div>

  );

}

const questions = [

  {

    id: 3457,

    question: "What language is React based on?",

    answer: "JavaScript",

  },

  {

    id: 7336,

    question: "What are the building blocks of React apps?",

    answer: "Components",

  },

  {

    id: 8832,

    question: "What's the name of the syntax we use to describe a UI in React?",

    answer: "JSX",

  },

  {

    id: 1297,

    question: "How to pass data from parent to child components?",

    answer: "Props",

  },

  {

    id: 9103,

    question: "How to give components memory?",

    answer: "useState hook",

  },

  {

    id: 2002,

    question:

      "What do we call an input element that is completely synchronised with state?",

    answer: "Controlled element",

  },

];

function FlashCards() {

  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {

    setSelectedId(id !== selectedId ? id : null);

  }

  return (

    <div className="flashcards">

      {questions.map((question) => (

        <div

          key={question.id}

          className={question.id === selectedId ? "selected" : ""}

          onClick={() => handleClick(question.id)}

        >

          <p>

            {question.id === selectedId ? question.answer : question.question}

          </p>

        </div>

      ))}

    </div>

  );

}
```

# What is Thinking in React ?

![](../../assets/thinking-react-1.png)

![](../../assets/thinking-react-2.png)

# Fundamentals of State Management

![](../../assets/state-management-1.png)

![](../../assets/z-1.png)

![](../../assets/state-management-3.png)

# Thinking about state and Lifting state up

The newItems Array will basically be the current items array plus the new items added to the end i.e the new state depends on the current state and thus we need to pass in a callback function 

```js
function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }
```

In React we are not allowed to mutate state . So we cannot simply push to the Array (React is about immutability). So the solution is to create a brand new array which contains all the current items plus the new one 

It is a convention to call handleAddItems as onAddItems (we could create an exact same prop and then pass it to function with the same name but its kind of a convention for it to be like this as it becomes more readable)

Lift up state :- Whenever multiple sibling components need access to the same state we move that piece of state up to the first common parent component

```js
import { useState } from "react";

const initialItems = [

  { id: 1, description: "Passports", quantity: 2, packed: false },

  { id: 2, description: "Socks", quantity: 12, packed: true },

  { id: 3, description: "Charger", quantity: 1, packed: false },

];

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }

  return (

    <div className="app">

      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList items={items} />

      <Stats />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {

    e.preventDefault();

    //gard clause

    if (!description) return; //return if desrciption absent

    //console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    setDescription(""); //reset state to initial state

    setQuantity(1); //reset state to initial state

    onAddItems(newItem);

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select

        value={quantity}

        onChange={(e) => setQuantity(Number(e.target.value))}

      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input

        type="text"

        placeholder="Item..."

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <button>Add</button>

    </form>

  );

}

function PackingList({ items }) {

  return (

    <div className="list">

      <ul>

        {items.map((item) => (

          <Item item={item} key={item.id} />

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

# Reviewing Lifting Up State

Child to parent communication(inverse data flow): 

if data flows from parent to children , how can promotions (child) update state in checkout(parent) . The Solution is to pass the setCoupons function down as a prop to the components who need to update the state .Now that we have the setCoupons function in promotions once a new coupon is added we can simply use setCoupons to update the state that lies in the parent component 

![](../../assets/child-parent-communication-1.png)

![](../../assets/child-parent-communication-2.png)

![](../../assets/child-parent-communication-3.png)

# Deleting an Item :More Child to parent Communication

```js
import { useState } from "react";

export default function App() {

  const [items, setItems] = useState();

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }

  function handleDeleteItem(id) {

    setItems((items) => items.filter((item) => item.id !== id));

  }

  return (

    <div className="app">

      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList items={items} onDeleteItem={handleDeleteItem} />

      <Stats />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {

    e.preventDefault();

    //gard clause

    if (!description) return; //return if desrciption absent

    //console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    setDescription(""); //reset state to initial state

    setQuantity(1); //reset state to initial state

    onAddItems(newItem);

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select

        value={quantity}

        onChange={(e) => setQuantity(Number(e.target.value))}

      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input

        type="text"

        placeholder="Item..."

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <button>Add</button>

    </form>

  );

}

function PackingList({ items, onDeleteItem }) {

  return (

    <div className="list">

      <ul>

        {items.map((item) => (

          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />

        ))}

      </ul>

    </div>

  );

}

function Item({ item, onDeleteItem }) {

  return (

    <li>

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>

        {item.quantity}

        {item.description}

      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>

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

# Updating an Item : Complex Immutable Data Operation

Controlled Element: The element has the value defined by some state and it also has an event handler which listens for the change and updates the state accordingly 

```jsx
<input

        type="checkbox"

        value={item.packed}

        onChange={() => onToggleItem(item.id)}

      />
```

```js
function handleToggleItem(id) {

    setItems((items) =>

      items.map((item) =>

        item.id === id ? { ...item, packed: !item.packed } : item

      )

    );

  }
```

Full Code:

```js
import { useState } from "react";

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }

  function handleDeleteItem(id) {

    setItems((items) => items.filter((item) => item.id !== id));

  }

  function handleToggleItem(id) {

    setItems((items) =>

      items.map((item) =>

        item.id === id ? { ...item, packed: !item.packed } : item

      )

    );

  }

  return (

    <div className="app">

      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList

        items={items}

        onDeleteItem={handleDeleteItem}

        onToggleItem={handleToggleItem}

      />

      <Stats />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {

    e.preventDefault();

    //gard clause

    if (!description) return; //return if desrciption absent

    //console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);

    setDescription(""); //reset state to initial state

    setQuantity(1); //reset state to initial state

    onAddItems(newItem);

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select

        value={quantity}

        onChange={(e) => setQuantity(Number(e.target.value))}

      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input

        type="text"

        placeholder="Item..."

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <button>Add</button>

    </form>

  );

}

function PackingList({ items, onDeleteItem, onToggleItem }) {

  return (

    <div className="list">

      <ul>

        {items.map((item) => (

          <Item

            item={item}

            key={item.id}

            onDeleteItem={onDeleteItem}

            onToggleItem={onToggleItem}

          />

        ))}

      </ul>

    </div>

  );

}

function Item({ item, onDeleteItem, onToggleItem }) {

  return (

    <li>

      <input

        type="checkbox"

        value={item.packed}

        onChange={() => onToggleItem(item.id)}

      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>

        {item.quantity}

        {item.description}

      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>

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

# Derived State

![](../../assets/derived-state.png)

# Calculating Statistics as derived State

```js
import { useState } from "react";

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }

  function handleDeleteItem(id) {

    setItems((items) => items.filter((item) => item.id !== id));

  }

  function handleToggleItem(id) {

    setItems((items) =>

      items.map((item) =>

        item.id === id ? { ...item, packed: !item.packed } : item

      )

    );

  }

  return (

    <div className="app">

      <Logo />

      <Form onAddItems={handleAddItems} />

      <PackingList

        items={items}

        onDeleteItem={handleDeleteItem}

        onToggleItem={handleToggleItem}

      />

      <Stats items={items} />

    </div>

  );

}

function Logo() {

  return <h1>🌴Far Away💼</h1>;

}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {

    e.preventDefault();

    //gard clause

    if (!description) return; //return if desrciption absent

    //console.log(e);

    const newItem = { description, quantity, packed: false, id: Date.now() };

    //console.log(newItem);

    setDescription(""); //reset state to initial state

    setQuantity(1); //reset state to initial state

    onAddItems(newItem);

  }

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip ?</h3>

      <select

        value={quantity}

        onChange={(e) => setQuantity(Number(e.target.value))}

      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (

          <option value={num} key={num}>

            {num}

          </option>

        ))}

      </select>

      <input

        type="text"

        placeholder="Item..."

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <button>Add</button>

    </form>

  );

}

function PackingList({ items, onDeleteItem, onToggleItem }) {

  return (

    <div className="list">

      <ul>

        {items.map((item) => (

          <Item

            item={item}

            key={item.id}

            onDeleteItem={onDeleteItem}

            onToggleItem={onToggleItem}

          />

        ))}

      </ul>

    </div>

  );

}

function Item({ item, onDeleteItem, onToggleItem }) {

  return (

    <li>

      <input

        type="checkbox"

        value={item.packed}

        onChange={() => onToggleItem(item.id)}

      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>

        {item.quantity}

        {item.description}

      </span>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>

    </li>

  );

}

function Stats({ items }) {

  if (!items.length)

    return (

      <p className="stats">

        <em>Strt adding some items to your packing list 🚀</em>

      </p>

    );

  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (

    <footer className="stats">

      <em>

        {percentage === 100

          ? "You got everything!Ready to go"

          : `💼 You have ${numItems} items on your list , and you already packed

        ${numPacked}(${percentage}%)`}

      </em>

    </footer>

  );

}

```

# Sorting Items

With Slice we basically take a copy of the array because the sort method is a mutating method else items would also get sorted which we dont want 

```js
function PackingList({ items, onDeleteItem, onToggleItem }) {

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")

    sortedItems = items

      .slice()

      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")

    sortedItems = items

      .slice()

      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (

    <div className="list">

      <ul>

        {sortedItems.map((item) => (

          <Item

            item={item}

            key={item.id}

            onDeleteItem={onDeleteItem}

            onToggleItem={onToggleItem}

          />

        ))}

      </ul>

      <div className="actions">

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>

          <option value="input">Sort by input order</option>

          <option value="description">Sort by description</option>

          <option value="packed">Sort by packed status</option>

        </select>

      </div>

    </div>

  );

} 

```
