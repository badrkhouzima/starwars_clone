import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "./Characters.css";
import PaginationChar from "./PaginnationChar";
import CircularProgress from "@mui/material/CircularProgress";
//import { useLocation } from "react-router-dom";

const Characters = ({ pageNum, setPageNum }) => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    const getResults = async () => {
      setLoading(true);

      const result = await axios.get(
        `https://swapi.dev/api/people/?page=${pageNum}`
      );
      setCharacters(result.data.results);
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
          <div className="characterName">
            {characters &&
              characters.map((character, index) => {
                return (
                  <div className="card" key={index}>
                    <h3>{character.name}</h3>
                    <ul>
                      <li>Birth Year: {character.birth_year}</li>
                      {/* <li>Species: {character.species}</li> */}
                      <li>height: {character.height}</li>
                      <li>Mass: {character.mass}</li>
                      <li>gender: {character.gender}</li>
                      <li>Hair Color: {character.hair_color}</li>
                      <li>Skin Color: {character.skin_color}</li>
                      {/* <li>Homeworld: {character.homeworld}</li> */}
                    </ul>
                  </div>
                );
              })}
            <PaginationChar setPageNum={setPageNum} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Characters;

//{
  /* <div>
  <h4>Related movies</h4>
  <ul>
    {character.films.map((film) => (
      <li key={index}>{film}</li>
    ))}
  </ul>
</div>; */
//}

//   <Link
//     to={{
//       pathname: "ShipInfo",
//       state: {
//         fromName: character.name,
//         fromModel: character.model,
//         fromCredits: character.cost_in_credits,
//         fromSpeed: character.max_atmosphering_speed,
//         fromManufacturer: character.manufacturer,
//         fromLength: character.length,
//         fromCrew: character.crew,
//         fromIndex: index,
//         apiPageNum: pageNum,
//       },
//     }}
//     key={character.model}
//   >
//{
  /* </Link> */
//}
