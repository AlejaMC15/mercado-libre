import { useState, useEffect } from "react";
/* import { ConfigService } from "../services/Services"; */

export const UseApi = () => {
  /*  const urlBase = ConfigService; */

  const [data, setData] = useState();

  const getListItems = (item) => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${item}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  return {
    data,
    getListItems,
  };
};
