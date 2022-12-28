import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <section>
      <div className="footer-section">
        <div className="footer-text">
          <div className="">
            <h2>
              <span>JetVoy</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              ab nobis dolore quo rerum veritatis blanditiis ipsam assumenda
              accusamus numquam!
            </p>
          </div>
        </div>

        <div className="footer-links">
          {data.map((x, index) => (
            <Column key={index} {...x} />
          ))}
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    title: "lorem",
    links: ["About Us", "Features"],
  },
  {
    title: "lorem",
    links: ["About Us", "Features"],
  },
  {
    title: "lorem",
    links: ["About Us", "Features"],
  },
  {
    title: "lorem",
    links: ["About Us", "Features"],
  },
];

function Column({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
