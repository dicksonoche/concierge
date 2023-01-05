import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-text">
        <div className="footer-logo" onClick={() => scroll.scrollToTop()}>
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
          <Link
            to={x.section}
            key={index}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <li key={index}>
              <h4>{x.title}</h4>
            </li>{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
}
const data = [
  {
    title: "Destinations",
    section: "section2",
  },
  ,
  {
    title: "About",
    section: "section3",
  },
  ,
  {
    title: "services",
    section: "section4",
  },
  ,
  {
    title: "testimonies",
    section: "section5",
  },
  {
    title: "contact",
    section: "section6",
  },
  ,
];
