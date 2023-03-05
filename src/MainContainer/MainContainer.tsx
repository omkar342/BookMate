import React from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./MainContainer.css";

function MainContainer() {
  return (
    <div className="main-container">
      <div className="main-container-header">
        <h1>Welcome to the BookMate!</h1>
      </div>
      <div className="main-container-content">
        <div className="main-container-text-image">
          <div className="main-container-text">
            <h3>
              BookMate: A Web Application for Searching Books by Keywords.
            </h3>
            <p>
              BookMate is a web application that allows users to search for
              books based on keywords using APIs. It provides a simple and
              intuitive interface for searching and browsing books, as well as
              the ability to add books to a favorites list. With BookMate, users
              can easily discover new books and keep track of their reading
              lists.
            </p>
          </div>
          <div className="main-container-search">
            <SearchContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
