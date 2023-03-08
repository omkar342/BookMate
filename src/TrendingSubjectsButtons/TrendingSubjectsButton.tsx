import React from "react";
import "./TrendingSubjectsButton.css";

interface TrendingSubjectsTitle {
  title: string;
}

function TrendingSubjectsButton(props: TrendingSubjectsTitle) {
  return (
    <div>
      <button className="trending-buttton">
        <p>{props.title}</p>
      </button>
    </div>
  );
}

export default TrendingSubjectsButton;
