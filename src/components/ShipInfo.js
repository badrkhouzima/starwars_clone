import React from "react";
import { useLocation, Link } from "react-router-dom";
import shipDataArray from "../data/data";
import "./ShipInfo.css";

const ShipInfo = () => {
  const location = useLocation();
  const {
    fromName,
    fromModel,
    fromCredits,
    fromSpeed,
    fromManufacturer,
    fromLength,
    fromCrew,
    fromIndex,
    apiPageNum,
  } = location.state;
  const dataIndex =
    apiPageNum === 1
      ? fromIndex
      : apiPageNum === 2
      ? fromIndex + 10
      : apiPageNum === 3
      ? fromIndex + 20
      : fromIndex + 30;
  const pilots = shipDataArray[dataIndex].pilot;
  const relatedFilms = shipDataArray[dataIndex].relatedfilms;

  return (
    <>
      <div className="Ship_FullInfo">
        <img
          alt=""
          height={300}
          width={900}
          src={shipDataArray[dataIndex].img}
        />
        <p>{shipDataArray[dataIndex].txt}</p>
        <h1>{fromName}</h1>
        <ul className="Ship_Info">
          <li>model: {fromModel}</li>
          <li>cost_in_credits: {fromCredits}</li>
          <li>max_atmosphering_speed: {fromSpeed}</li>
          <li>manufacturer: {fromManufacturer}</li>
          <li>length: {fromLength}</li>
          <li>crew: {fromCrew}</li>
        </ul>
      </div>
      <div className="pilots_films_cards">
        <div className="relatedPilots_names">
          <h3>Related pilots:</h3>
          {pilots.length > 0 ? (
            pilots.map((pilot, index) => {
              return (
                <Link
                  to={{
                    pathname: "/pilots",
                    state: {
                      fromPilotName: pilot.pilotName,
                      fromBirthYear: pilot.birthYear,
                      fromSpecies: pilot.species,
                      fromHeight: pilot.height,
                      fromMass: pilot.mass,
                      fromGender: pilot.gender,
                      fromHairColor: pilot.hairColor,
                      fromSkinColor: pilot.skinColor,
                      fromHomeworld: pilot.homeworld,
                    },
                  }}
                  key={index}
                >
                  <ul>
                    <li>{pilot.pilotName}</li>
                  </ul>
                </Link>
              );
            })
          ) : (
            <h3>No dedicated pilot for this spaceship</h3>
          )}
        </div>
        <div className="relatedFilms_names">
          <h3>Related films:</h3>
          {relatedFilms.map((film) => (
            <ul>
              <li>{film}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShipInfo;
