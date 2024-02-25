import React from "react";

//include images into your bundle
import MyLogo from "../../img/MyLogo.png";

//create your first component
const Jumbotron = () => {
  return (
    <div className="jumbotron" style={{ padding: '20px', backgroundColor: '#F0FFFF' }}>
      <h1 className="display-4" style={{ fontFamily: 'Ballet' }}>Glimpses of the Lavish Life!</h1>
      <p className="lead" style={{ fontFamily: 'Verdana, sans-serif' }}>Welcome to the world of exquisite beauty...</p>
      <hr className="my-4" />
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button" style={{ backgroundColor: '#8FBC8F' }}>Learn more</a>
      </p>
    </div>
  );
};
export default Jumbotron;

