import React from "react";
import "./TrendingSubjectsButton.css";

interface TrendingSubjectsTitle {
  title: string;
  handleOnClick: (searchSubject: string) => void;
}

function TrendingSubjectsButton(props: TrendingSubjectsTitle) {
  return (
    <div>
      <button
        onClick={(event) => {
          props.handleOnClick(props.title.toLowerCase().split(" ").join("_"));
        }}
        className="trending-buttton"
      >
        <p>{props.title}</p>
      </button>
    </div>
  );
}

export default TrendingSubjectsButton;
