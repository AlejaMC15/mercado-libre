import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./views/Searchs/Search";
import SearchResult from "./views/SearchResults/SearchResult";
import Welcome from "./views/Welcome/Welcome";
import ItemDetail from "./views/ItemDetails/ItemDetail";
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
    loading,
    error,
  } = UseApi();

  return (
    <div className="App">
      <ListItemsProvider
        value={{
          getListItems,
          data,
          getDetailItem,
          dataItem,
          getDescription,
          descriptionItem,
          loading,
          error,
        }}
      >
        <Search />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/items"
            element={
              <SearchResult
                getListItems={getListItems}
                data={data}
                loading={loading}
                error={error}
              />
            }
          />
          <Route
            path="/items/:id"
            element={
              <ItemDetail
                data={data}
                getDetailItem={getDetailItem}
                dataItem={dataItem}
                getDescription={getDescription}
                descriptionItem={descriptionItem}
                loading={loading}
                error={error}
              />
            }
          />
        </Routes>
      </ListItemsProvider>
    </div>
  );
}

export default App;
