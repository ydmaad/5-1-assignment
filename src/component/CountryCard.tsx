import React from "react";
import { Country } from "../types/type";

interface CardProps {
  country: Country;
  clickCountry: (country: Country) => void;
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
        <img
          src={country.flags.png}
          style={{ width: "250px", height: "150px" }}
        />
        <h3>{country.name.common}</h3>
      </div>
    </>
  );
};

export default CountryCard;
