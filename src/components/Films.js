import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Films.css";
import CircularProgress from "@mui/material/CircularProgress";

const Films = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getResults = async () => {
      setLoading(true);
      const result = await axios.get("https://swapi.dev/api/films/");
      setFilms(result.data.results);
      setLoading(false);
    };
    getResults();
  }, []);

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
          <div className="film_names">
            {films &&
              films.map((film, index) => (
                <ul>
                  <li> {film.title}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Films;
