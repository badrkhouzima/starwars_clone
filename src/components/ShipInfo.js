import React from "react";
import { useLocation } from "react-router-dom";
import shipDataArray from "../data/data";
import "./ShipInfo.css"

const ShipInfo = ()=> {
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
   apiPageNum
 } = location.state;
const dataIndex =  apiPageNum === 1
              ? fromIndex
              : apiPageNum === 2
              ? fromIndex + 10
              : apiPageNum === 3
              ? fromIndex + 20
              : fromIndex + 30;
  return (
    <div className="Ship_FullInfo">
      <img alt="" height={300} width={900} src={shipDataArray[dataIndex].img} />
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
  );
}

export default ShipInfo;
