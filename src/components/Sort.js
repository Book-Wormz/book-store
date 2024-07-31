import React, { useState } from "react";
import BookGrid from "./BookGrid";

const SortButton = ({ genre, volumes }) => {
  const [sortOrder, setSortOrder] = useState("");
  const [displayedOrder, setDisplayedOrder] = useState("Relevance");
  const handleSort = (order) => {
    setSortOrder(order);
    if (order.includes("relevance")) {
      setDisplayedOrder("Relevance");
    } else {
      setDisplayedOrder("Newest");
    }
  };

  return (
    <>
      <div className="dropdown p-3 pl:2 md:pl-4 lg:pl-12">
        <div
          tabIndex="0"
          role="button"
          className="btn bg-sortGrey-10 text-white hover:text-sortGrey-20 p-2"
        >
          Sort by: {displayedOrder}
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content menu bg-white rounded-box z-[1] shadow"
        >
          <li>
            <div onClick={() => handleSort("&orderBy=relevance")}>
              Relevance
            </div>
          </li>
          <li>
            <div onClick={() => handleSort("&orderBy=newest")}>Newest</div>
          </li>
        </ul>
      </div>
      <BookGrid genre={genre} volumes={volumes} sortOrder={sortOrder} />
    </>
  );
};

export default SortButton;
