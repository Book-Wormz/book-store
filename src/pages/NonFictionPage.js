import React from "react";
import Sort from "../components/Sort";

const NonFiction = () => {
  return (
    <div>
      <h1>Nonfiction</h1>
      <Sort genre="subject:nonfiction" volumes="&maxResults=40" />
    </div>
  );
};

export default NonFiction;
