import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./views/search/Search";
import SearchResult from "./views/searchResult/SearchResult";
import ItemDetail from "./views/itemDetail/ItemDetail";
import { UseApi } from "./hooks/UseApi";
import { ListItemsProvider } from "./context/listItemContext";

import "./App.scss";

function App() {
  const {
    getListItems,
    data,
    getDetailItem,
    dataItem,
    getDescription,
    descriptionItem,
  } = UseApi();

  return (
    <div className="App">
      {/* <ul class="breadcrumb">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pictures</a>
        </li>
        <li>
          <a href="#">Summer 15</a>
        </li>
        <li>Italy</li>
      </ul> */}
      <ListItemsProvider value={{ getListItems, data }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/items"
            element={<SearchResult getListItems={getListItems} data={data} />}
          />
          <Route
            path="/items/:id"
            element={
              <ItemDetail
                getDetailItem={getDetailItem}
                dataItem={dataItem}
                getDescription={getDescription}
                descriptionItem={descriptionItem}
              />
            }
          />
        </Routes>
      </ListItemsProvider>
    </div>
  );
}

export default App;
