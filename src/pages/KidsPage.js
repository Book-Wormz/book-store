import React from "react";
import Sort from "../components/Sort";

const Kids = () => {
  return (
    <div>
      <h1>Kids</h1>
      <Sort genre="subject:children" volumes="&maxResults=40" />
    </div>
  );
};

export default Kids;
