import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__info">
            <h1>Enjoy Your Morning Coffee.</h1>
            <p>
              The coofee is brewed by fist roasting the green coffee beans over
              hot coals in brazier. given to Opportunity
            </p>
            <button className="hero__btn">Test Coffee</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
