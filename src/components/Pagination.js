import React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Pagination = ({ setPageNum }) => {

  const shipPages = [];
  for (let i = 1; i < 5; i++) {
    shipPages.push(i);
  }
  
  return (
    <div>
      <ul className="pagination">
        {shipPages.map((pageNumber, index) => (
          <Link to="/starships?=page" key={pageNumber + index}>
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
export default Pagination;

//  const [currentPage, setCurrentPage] = useState(1);
//  const [shipsPerPage, setShipsPerPage] = useState(10);

//  const indexOfLastShip = currentPage * shipsPerPage;
//  const indexOfFirstShip = indexOfLastShip - shipsPerPage;
//  const currentShips = starships.slice(indexOfFirstShip, indexOfLastShip);


// {{
//               pathname: "ShipCards",
//               state: {
//                 pagNum: index,
//               },
//             }}
