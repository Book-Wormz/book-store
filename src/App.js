import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import Fiction from "./pages/FictionPage";
import NonFiction from "./pages/NonFiction";
import Classics from "./pages/Classics";
import Kids from "./pages/Kids";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/nonfiction" element={<NonFiction />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/classics" element={<Classics />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
