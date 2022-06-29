import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo_ML.png";
import IconSearch from "../../images/ic_Search.png";

import "./Search.scss";

const Search = () => {
  const [itemSearch, setItemSearch] = useState("");

  const navigate = useNavigate();

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
          onChange={(e) => setItemSearch(e.target.value)}
        />
        <img
          src={IconSearch}
          alt="icon_search"
          onClick={() =>
            itemSearch && navigate(`/items`, { state: itemSearch })
          }
        />
      </div>
    </div>
  );
};

export default Search;
