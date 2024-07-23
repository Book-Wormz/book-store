import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResultsPage";
import Fiction from "./pages/FictionPage";
import NonFiction from "./pages/NonFictionPage";
import Classics from "./pages/ClassicsPage";
import Kids from "./pages/KidsPage";

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
