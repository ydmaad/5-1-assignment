import React from "react";
import { Country } from "../types/type";

interface CardProps {
  county: Country;
}

const CountryCard: React.FC = ({ country }: CardProps) => {
  return (
    <>
      <img src={country.flags.png} alt="" />
    </>
  );
};

export default CountryCard;
