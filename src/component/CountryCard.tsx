import React from "react";
import { Country } from "../types/type";

interface CardProps {
  countryName: string;
  flag: string;
  clickCountry: (countryName: Country) => void;
}

const CountryCard: React.FC<CardProps> = ({
  countryName,
  flag,
  clickCountry,
}) => {
  return (
    <>
      <div
        onClick={() => clickCountry(countryName)}
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          margin: "10px",
          width: "250px",
          height: "200px",
          padding: "10px",
        }}
      >
        <img src={flag} style={{ width: "250px", height: "150px" }} />
        <h3>{countryName}</h3>
      </div>
    </>
  );
};

export default CountryCard;
