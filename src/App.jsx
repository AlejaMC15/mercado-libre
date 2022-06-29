import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./views/search/Search";
import SearchResult from "./views/searchResult/SearchResult";
import { UseApi } from "./hooks/UseApi";
import { ListItemsProvider } from "./context/listItemContext";

import "./App.scss";

function App() {
  const { getListItems, data } = UseApi();

  return (
    <div className="App">
      <ListItemsProvider value={{ getListItems, data }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route
            path="/items"
            element={<SearchResult getListItems={getListItems} data={data} />}
          />
          <Route path="/items/:id" element={<SearchResult />} />
        </Routes>
      </ListItemsProvider>
    </div>
  );
}

export default App;
