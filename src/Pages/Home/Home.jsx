import React from "react";
import "./home.scss";
import {useState} from "react";

function Home() {
  const [count, setCount]= useState(0)
  function decrease(){
    if(count> 0){
      setCount(count-1)
    }
  }
  return (
    <section className="home">
      <div className="block">
        <button onClick={decrease} className="toLeft">Left</button>
        <p className="count">Here:  {count} </p>
        <button onClick={()=>setCount( count + 1)} className="toRight">Right</button>
      </div>
    </section>
  );
}

export default Home;
