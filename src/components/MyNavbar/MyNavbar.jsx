import React from "react";
import AddContact from "../AddContact/AddContact";
import "./MyNavbar.css";

const MyNavbar = ({ handleContacts }) => {
  return (
    <>
      <nav className="Nav">
        <div className="left-navbar-items">
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBjdPpydc7JHT6l7eW0O2dRDWLaC9-gvIeg&usqp=CAU"
            alt="logo"
           />
           <h3 className="nav-text">My Contact Book</h3>
        </div>
        <div className="center-navbar-items">
          <a href="#"> More info</a>
          <a href="#"> Contact us</a>
          <a href="#"> Menu</a>
        </div>
        <div className="rigth-navbar-items">
          <AddContact handleContacts={handleContacts} />
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
