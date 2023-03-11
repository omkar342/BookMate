import React from "react";
import "./TrendingSubjectsButton.css";

interface TrendingSubjectsTitle {
  title: string;
  handleOnClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    searchSubject: string
  ) => void;
}

function TrendingSubjectsButton(props: TrendingSubjectsTitle) {
  return (
    <div>
      <button
        onClick={(event) => {
          props.handleOnClick(
            event,
            props.title.toLowerCase().split(" ").join("_")
          );
        }}
        className="trending-buttton"
      >
        <p>{props.title}</p>
      </button>
    </div>
  );
}

export default TrendingSubjectsButton;
