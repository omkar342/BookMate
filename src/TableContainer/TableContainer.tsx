import React from "react";
import "./TableContainer.css";

interface ISubjectBooksProps {
  subject: string;
  subjectBooks: {
    key: string;
    title: string;
    authors: { key: string; name: string }[];
    first_publish_year: number;
  }[];
}

function TableContainer(props: ISubjectBooksProps) {
  return (
    <div>
      <h1>
        Books on topic: {props.subject.toLocaleUpperCase().split("_").join(" ")}
      </h1>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Authors</th>
            <th>First Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {props.subjectBooks.map((subjectBook, index) => (
            <tr key={subjectBook.key}>
              <td>{index + 1}</td>
              <td>{subjectBook.title}</td>
              <td>
                {subjectBook.authors.map((author) => author.name).join(", ")}
              </td>
              <td>{subjectBook.first_publish_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
