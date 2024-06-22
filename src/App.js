import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/detail" element={<DetailScreen />} />
        </Routes>
      </BrowserRouter>
      {/* <SearchContainer/> */}
    </div>
  );
};

export default App;
