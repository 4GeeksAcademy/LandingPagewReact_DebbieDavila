import React from "react";
import logo from "/src/img/MyLogo.png"; // Import your logo image

const Navbar = () => {
  return (
    <div className="Navbar" style={{ padding: '100px', fontFamily: 'Tahoma' }} >
      <nav className="navbar navbar-expand-lg navbar-light ">

        <img src={logo} alt="Logo" id="logo" />
        {/* {MyLogo.png} */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{ fontFamily: 'Arial, sans-serif' }}>
            <a className="nav-item nav-link active" href="#">About <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Portfolio</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Your Project!</a>
          </div>
        </div>
      </nav>
    </div>
  )
};
export default Navbar;