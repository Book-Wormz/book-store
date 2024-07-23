import React from "react";
import BookGrid from "../components/BookGrid";

const Kids = () => {
  return (
    <div>
      <h1>Kids</h1>
      <BookGrid genre="subject:children" volumes="&maxResults=40" />
    </div>
  );
};

export default Kids;
