import React from "react";
import "./stats.css";
import image from "../../images/me-about.jpg";

export default function Stats() {
  return (
    <section>
      <div className="stats-section">
        <div className="stats-image">
          <img src={image} alt={"adventurer"} />
        </div>
        <div className="stats-text">
          <h2>
            Our <span>stories</span> with <br />
            adventurers
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            autem aut dolor sapiente, delectus impedit earum exercitationem nam
            ullam. Consequuntur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
            fugit sunt! Ab itaque totam quia!
          </p>
          <TinyCardsList />
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    stat: "12K+",
    desc: "Success Journey",
  },
  {
    stat: "12K+",
    desc: "Success Journey",
  },
  {
    stat: "12K+",
    desc: "Success Journey",
  },
];

function TinyCardsList() {
  return (
    <div className="stats-list">
      {data.map((x, index) => (
        <TinyCards key={index} {...x} />
      ))}
    </div>
  );
}
function TinyCards({ stat, desc }) {
  return (
    <div className="stats-card">
      <h2>
        <span>{stat}</span>
      </h2>
      <p>{desc}</p>
    </div>
  );
}
