import React, { useState } from "react";
import TrendingSubjectsButton from "../TrendingSubjectsButtons/TrendingSubjectsButton";
import "./SearchContainer.css";
import trendingSubjects from "./TrendingSubject";
import TableContainer from "../TableContainer/TableContainer";

const SearchContainer: React.FC = () => {
  const [subjectData, setSubjectData] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    searchSubject: string
  ): void => {
    setLoading(true);
    try {
      const response = fetch(
        `https://openlibrary.org/subjects/${searchSubject}.json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSubjectData(data.works);
          setLoading(false);
        });
    } catch (e: any) {
      console.log(e);
      throw new Error(e);
    }
  };

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
        // onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />

      <div className="search-trending-subject-buttons">
        {trendingSubjects.map((trendingSubject, index) => {
          return (
            <TrendingSubjectsButton
              key={index}
              title={trendingSubject}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>
      <div className="search-table">
        {loading && <h1>Loading...</h1>}
        {!loading && subjectData.length > 0 && (
          <TableContainer subjectBooks={subjectData} />
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
