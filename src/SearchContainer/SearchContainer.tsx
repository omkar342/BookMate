import React from "react";
import "./SearchContainer.css";

function SearchContainer() {
  return (
    <div className="search-container">
      <h2>
        Use our search box to discover information on your favorite books and
        authors, as well as to explore books on trending topics.
      </h2>
      <input
        placeholder="Search by book title or author name"
        className="search-style"
      />
    </div>
  );
}

export default SearchContainer;
