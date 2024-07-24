import React from "react";
import BookGrid from "../components/BookGrid";

const NonFiction = () => {
  return (
    <div>
      <h1>Nonfiction</h1>
      <BookGrid genre="subject:nonfiction" volumes="&maxResults=40" />
    </div>
  );
};

export default NonFiction;
