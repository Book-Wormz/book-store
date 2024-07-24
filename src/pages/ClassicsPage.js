import React from "react";
import BookGrid from "../components/BookGrid";

const Classics = () => {
  return (
    <div>
      <h1>Classics</h1>
      <BookGrid genre="subject:classics" volumes="&maxResults=40" />
    </div>
  );
};

export default Classics;
