/*
===================================================
   HEADER COMPONENT
===================================================
*/
import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <div className="header__container">
        <Link
          to={`/`}
          className="header__logo-link"
          href="../../public/index.html"
        >
          <img className="header__logo" src={Logo} alt="Brainflix" />
        </Link>
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
          <Link to={`/upload`}>
            <button className="header__button-upload">
              <img
                className="header__button-upload-image"
                src={Upload}
                alt="Upload"
              />
              UPLOAD
            </button>
          </Link>
          <div className="header__button-user"></div>
        </div>
      </div>
    </section>
  );
};
export default Header;
