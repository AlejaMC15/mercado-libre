import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/views/search/Search";
import SearchResult from "./components/views/searchResult/SearchResult";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/items" element={<SearchResult />} />
        <Route path="/items/:id" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
