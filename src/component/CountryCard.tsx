import React from "react";
import { SaveCountry } from "../types/type";

interface CardProps {
  clickCountry: (countryName: SaveCountry) => void;
  country: SaveCountry;
}

const CountryCard: React.FC<CardProps> = ({ country, clickCountry }) => {
  return (
    <>
      <div
        onClick={() => clickCountry(country)}
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          margin: "10px",
          width: "250px",
          height: "200px",
          padding: "10px",
        }}
      >
        <img src={country.flag} style={{ width: "250px", height: "150px" }} />
        <h3>{country.countryName}</h3>
      </div>
    </>
  );
};

export default CountryCard;
