import React from "react";
import GenreCard from "../components/GenreCard";

const NonFiction = () => {
  return (
    <div className="pb-5 pr-5 pl-5">
      <h1 className="pb-5 pr-5 pl-5">Popular Nonfiction Books</h1>
      <GenreCard genre={"nonfiction"} />
    </div>
  );
};

export default NonFiction;
