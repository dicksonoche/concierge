import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbarstyle.css";
import { Link } from "react-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const removeNav = () => {
    navRef.current.classList.remove("responsive_nav");
  };

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
      title: "testimonials",
      section: "section5",
    },
    {
      title: "contact",
      section: "section6",
    },
    ,
  ];

  return (
    <header>
      <h2>Jetvoy Concierge</h2>

      <nav ref={navRef} className="navbar">
        {data.map((x, index) => (
          <Link
            key={index}
            to={x.section}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            onClick={removeNav}
          >
            {x.title}{" "}
          </Link>
        ))}

        <button className="book-btn">
          <a href="#">Book</a>
        </button>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
``;
