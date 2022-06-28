import React from "react";
import Logo from "../../images/Logo_ML.png";
import IconSearch from "../../images/ic_Search.png";
import "./Search.scss";

const Search = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="logo_ml" />
      </div>
      <div className="search">
        <input
          type="search"
          id="search"
          placeholder="Nunca dejes de buscar"
          name="q"
        />
        <img src={IconSearch} alt="icon_search"></img>
      </div>
    </div>
  );
};

export default Search;
