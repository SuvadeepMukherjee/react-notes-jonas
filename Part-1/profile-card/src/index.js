import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skillName="HTML + CSS 💪" />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img
      src="/images/image-suvadeep.jpg"
      alt="image-Of-person"
      className="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Suvadeep Mukherjee</h1>
      <p>
        Backend developer .When not coding , I like to play cricket , to cook
        (and eat) ,
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS " emoji="👶" color="blue" />
      <Skill skill="JavaScript " emoji="💪" color="yellow" />
      <Skill skill="Node" emoji="💪" color="green" />
      <Skill skill="Node" emoji="👶" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Strict mode is a component that is part of react
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
