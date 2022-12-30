import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-text">
        <div className="">
          <h2>
            <span>JetVoy Concierge</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            ab nobis dolore quo rerum veritatis blanditiis ipsam assumenda
            accusamus numquam!
          </p>
        </div>
      </div>

      <ul className="footer-links">
        {data.map((x, index) => (
          <li key={index}>
            <h4>{x}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
const data = ["Home", "About Us", "services", "Contact"];
