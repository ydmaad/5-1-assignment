import React from "react";
import { Country } from "../types/type";

interface CardProps {
  country: Country;
}

const CountryCard: React.FC<CardProps> = ({ country }) => {
  return (
    <>
      <li
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          margin: "10px",
        }}
      >
        <img
          src={country.flags.png}
          style={{ width: "250px", height: "150px" }}
        />
        <h3>{country.name.common}</h3>
      </li>
    </>
  );
};

export default CountryCard;
