import React, { useEffect, useState, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./scroll.css";

function Scroll() {
  const [display, setDisplay] = useState("hide");
  const renderRef = useState(false);
  useEffect(() => {
    function toggleDisplay() {
      setDisplay(window.scrollY > 300 ? "show" : "hide");
    }
    //     function scrollFunction() {

    //   // check that button is not lower than footer.
    //   let footerElement = document.getElementById('footer');
    //   let footerElementRect = footerElement.getBoundingClientRect();
    //   let mybuttonPositionBottom = mybutton.offsetTop + mybutton.offsetHeight;
    //   if (footerElementRect.y < mybuttonPositionBottom) {
    //     // if button is lower than footer.
    //     // modify css bottom.
    //     let diffheight = mybuttonPositionBottom - footerElementRect.y;
    //     let style = window.getComputedStyle(mybutton);
    //     let addBottom = parseInt(style.getPropertyValue('bottom')) + diffheight;
    //     mybutton.style.bottom = addBottom + 'px'; // maybe add more 10 px for bottom space of a button.
    //   } else {
    //     mybutton.style.bottom = '';
    //   }
    // }
    if (renderRef.current) {
      window.addEventListener("scroll", toggleDisplay);
      return window.removeEventListener("scroll", toggleDisplay());
    } else {
      renderRef.current = true;
    }

    //   return
  }, []);
  return (
    <BsFillArrowUpSquareFill
      className={`btnScrollToTop ${display}`}
      onClick={() => scroll.scrollToTop()}
    />
  );
}

export default Scroll;
