/*
===================================================
   HEADER COMPONENT
===================================================
*/
import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <a className="header__logo-link" href="../../public/index.html">
          <img className="header__logo" src={Logo} alt="Brainflix" />
        </a>
        <form className="header__search">
          <input
            className="header__search-icon"
            type="image"
            src={Search}
            alt="search"
          />
          <input
            className="header__search-field"
            name="search"
            placeholder="Search"
          />
        </form>
        <div className="header__button">
          <button className="header__button-upload">
            <img
              className="header__button-upload-image"
              src={Upload}
              alt="Upload"
            />
            UPLOAD
          </button>
          <div className="header__button-user"></div>
        </div>
      </div>
    </section>
  );
};
export default Header;
