import React from "react";
import { useLocation } from "react-router-dom";
const Pilots = () => {
  const location = useLocation();
  const {
    fromPilotName,
    fromBirthYear,
    fromSpecies,
    fromHeight,
    fromMass,
    fromGender,
    fromHairColor,
    fromSkinColor,
    fromHomeworld,
  } = location.state;
  return (
    <div>
      <img src="" alt="" />
      <h3>{fromPilotName}</h3>
      <ul>
        <li>Birth Year: {fromBirthYear} </li>
        <li>Species: {fromSpecies} </li>
        <li>Height: {fromHeight} </li>
        <li>Mass: {fromMass} </li>
        <li>Gender: {fromGender} </li>
        <li>Hair: {fromHairColor} </li>
        <li>Skin Color: {fromSkinColor}</li>
        <li>Homeworld: {fromHomeworld} </li>
      </ul>
    </div>
  );
};

export default Pilots;
