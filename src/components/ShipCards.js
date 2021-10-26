import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ShipCards.css";
import Pagination from "./Pagination";
import CircularProgress from "@mui/material/CircularProgress";
//import { useLocation } from "react-router-dom";

const ShipCards = ({ pageNum, setPageNum }) => {
  const [starships, setStarships] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    const getResults = async () => {
      setLoading(true);
      const result = await axios.get(
        `https://swapi.dev/api/starships/?page=${pageNum}`
      );
      setStarships(result.data.results);
      setLoading(false);
    };
    getResults();
  }, [pageNum]);
  if (loading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        <h2>...</h2>
      </div>
    );
  }

  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <div className="starShipName">
            {starships &&
              starships.map((starship, index) => {
                return (
                  <Link
                    to={{
                      pathname: "ShipInfo",
                      state: {
                        fromName: starship.name,
                        fromModel: starship.model,
                        fromCredits: starship.cost_in_credits,
                        fromSpeed: starship.max_atmosphering_speed,
                        fromManufacturer: starship.manufacturer,
                        fromLength: starship.length,
                        fromCrew: starship.crew,
                        fromIndex: index,
                        apiPageNum: pageNum,
                      },
                    }}
                    key={starship.model}
                  >
                    <div className="card">
                      <p>{starship.name}</p> <p>{starship.model}</p>
                    </div>
                  </Link>
                );
              })}
            <Pagination setPageNum={setPageNum} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShipCards;
