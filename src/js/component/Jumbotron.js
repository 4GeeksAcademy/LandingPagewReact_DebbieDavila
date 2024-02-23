import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Bonjour Toute le Monde 🌎!</h1>
      <p className="lead">Welcome to the amazing world of beauty and wings.</p>
      <hr className="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  )
}

  ;

export default Jumbotron;