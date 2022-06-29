import { useState } from "react";
import { urlBase } from "../services/Services";

export const UseApi = () => {
  const [data, setData] = useState();
  const [dataItem, setDataItem] = useState();
  const [descriptionItem, setDescriptionItem] = useState();
  const [loading, setLoading] = useState(true);

  const getListItems = (item) => {
    setLoading(true);
    fetch(`${urlBase}/sites/MLA/search?q=${item}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getDetailItem = (id) => {
    setLoading(true);
    fetch(`${urlBase}/items/${id}`)
      .then((response) => response.json())
      .then((data) => setDataItem(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const getDescription = (id) => {
    setLoading(true);
    fetch(`${urlBase}/items/${id}/description`)
      .then((response) => response.json())
      .then((data) => setDescriptionItem(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return {
    data,
    getListItems,
    getDetailItem,
    dataItem,
    getDescription,
    descriptionItem,
    loading,
  };
};
