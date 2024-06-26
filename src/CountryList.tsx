import { useEffect, useState } from "react";
import { getCountry } from "./api/fetchApi";
import { Country } from "./types/type";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountry();
  }, []);
  return <div>CountryList</div>;
};

export default CountryList;
