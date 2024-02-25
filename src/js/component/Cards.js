import React from "react";

const Card = (props) => {
  return (
    <div style={{ maxWidth: '370px' }}> {/* Adjust the value of maxWidth to your desired size */}
      <div className="text-center">
        <div className="card-deck" style={{ display: "flex", justifyContent: 'center', padding: '20px', backgroundColor: "black" }} />
        <div cardName="card" />
        <img cardName="card-img-top" src={props.url} alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px' }} />
        <div cardName="card-body">
          <h5 cardName="card-title">Card title</h5>
          <p cardName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button" style={{ backgroundColor: '#8FBC8F' }}>Learn more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;














