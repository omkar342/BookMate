import React from "react";
import TrendingSubjectsButton from "../TrendingSubjectsButtons/TrendingSubjectsButton";
import "./SearchContainer.css";

function SearchContainer() {
  const trendingSubjects = [
    "Fiction",
    "Self-help",
    "History",
    "Health and wellness",
    "Science and technology",
  ];

  return (
    <div className="search-container">
      <h2>
        Use our search box to discover information on your favorite books and
        authors, as well as to explore books on trending topics.
      </h2>
      <input
        placeholder="Search by trending subjects, book title or author name"
        className="search-style"
      />
      <div className="search-trending-subject-buttons">
        {trendingSubjects.map((trendingSubject) => {
          return <TrendingSubjectsButton title={trendingSubject} />;
        })}
      </div>
    </div>
  );
}

export default SearchContainer;
