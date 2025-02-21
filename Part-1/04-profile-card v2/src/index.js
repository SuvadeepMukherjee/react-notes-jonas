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
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  console.log(skillObj);

  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.emoji}</span>
      <span>{skillObj.level === "beginner" && "👶"}</span>
      <span>{skillObj.level === "intermediate" && "👍"}</span>
      <span>{skillObj.level === "advanced" && "💪"}</span>
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
const skills = [
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
