import React from "react";
import "./services.scss";

function Services() {
  const [buttonText, setText] = React.useState("Maksat");
  const [classList, setClassList] = React.useState("");

  const onCange = () => {
    setText(`Maksatbek`);
    setClassList("jashyl-btn");
  };
  return (
    <section>
      <h2>Services</h2>
      <button className={classList} onClick={onCange}>
        {buttonText}
      </button>
    </section>
  );
}
export default Services;
