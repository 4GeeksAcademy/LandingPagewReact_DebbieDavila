import React from "react";

const Card = (props) => {
    return (
        <>
            <div cardName="card" style={{ height: "10", width: "5rem" }} />
            <img cardName="card-img-top" src={props.url} alt="Card image cap" /><div cardName="card-body">
                <h5 cardName="card-title">Card title</h5>
                <p cardName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" cardName="btn btn-primary">Go somewhere</a>
            </div>

        </>

    )
}
    ;
export default Card;








