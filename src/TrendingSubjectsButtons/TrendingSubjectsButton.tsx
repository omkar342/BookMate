import React from "react";
import "./TrendingSubjectsButton.css";

type TrendingSubjectsTitle = {
  title: string;
  handleOnClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    searchSubject: string
  ) => void;
};

function TrendingSubjectsButton(props: TrendingSubjectsTitle) {
  return (
    <div>
      <button
        onClick={(event) => {
          props.handleOnClick(event, props.title);
        }}
        className="trending-buttton"
      >
        <p>{props.title}</p>
      </button>
    </div>
  );
}

export default TrendingSubjectsButton;
