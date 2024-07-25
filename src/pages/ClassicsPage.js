import React from "react";
import Sort from "../components/Sort";

const Classics = () => {
  return (
    <div>
      <h1>Classics</h1>
      <Sort genre="subject:classics" volumes="&maxResults=40" />
    </div>
  );
};

export default Classics;
