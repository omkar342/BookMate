import React from "react";
import TrendingSubjectsButton from "../TrendingSubjectsButtons/TrendingSubjectsButton";
import "./SearchContainer.css";

const SearchContainer: React.FC = () => {
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    searchSubject: string
  ): void => {
    console.log(searchSubject, "clicked", event.type);
  };

  const trendingSubjects = [
    "Fiction",
    "Self-help",
    "History",
    "Health and wellness",
    "Science and technology",
  ];

  return (
    <div className="search-container">
      <div className="search-container-h2">
        <h2>
          Use our search box to discover information on your favorite books and
          authors, as well as to explore books on trending topics.
        </h2>
      </div>

      <input
        placeholder="Search by trending subjects, book title or author name"
        className="search-input"
      />

      <div className="search-trending-subject-buttons">
        {trendingSubjects.map((trendingSubject) => {
          return (
            <TrendingSubjectsButton
              title={trendingSubject}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchContainer;
