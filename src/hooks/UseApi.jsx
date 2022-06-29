import { useState } from "react";
import { urlBase } from "../services/Services";

export const UseApi = () => {
  const [data, setData] = useState();
  const [dataItem, setDataItem] = useState();
  const [descriptionItem, setDescriptionItem] = useState();

  const getListItems = (item) => {
    fetch(`${urlBase}/sites/MLA/search?q=${item}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  const getDetailItem = (id) => {
    fetch(`${urlBase}/items/${id}`)
      .then((response) => response.json())
      .then((data) => setDataItem(data))
      .catch((error) => console.log(error));
  };

  const getDescription = (id) => {
    fetch(`${urlBase}/items/${id}/description`)
      .then((response) => response.json())
      .then((data) => setDescriptionItem(data))
      .catch((error) => console.log(error));
  };

  return {
    data,
    getListItems,
    getDetailItem,
    dataItem,
    getDescription,
    descriptionItem,
  };
};
