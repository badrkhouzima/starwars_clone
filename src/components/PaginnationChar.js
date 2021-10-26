import React from "react";
import "./PaginationChar.css";
import { Link } from "react-router-dom";

const PaginationChar = ({ setPageNum }) => {
  const charPages = [];
  for (let i = 1; i < 10; i++) {
    charPages.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {charPages.map((pageNumber, index) => (
          <Link to="/characters" key={index}>
            <li
              className="page-item"
              onClick={() => {
                setPageNum(index + 1);
              }}
            >
              {pageNumber}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default PaginationChar;
