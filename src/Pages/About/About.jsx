import React from "react";
import { useRef, useEffect } from "react";
import { init } from "ityped";

function About() {
  const animateTextRef = useRef();
  useEffect(() => {
    init(animateTextRef.current, {
      showCursor: true,
      strings: [`Frontend React разработчик`],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="about">
      <h2 ref={animateTextRef}></h2>
    </section>
  );
}

export default About;
