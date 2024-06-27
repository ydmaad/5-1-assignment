import { useEffect, useState } from "react";
import { Country } from "../types/type";
import { getCountry } from "../api/fetchApi";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  // 비동기 함수로 나라 데이터를 countries에 업데이트
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Country[] = await getCountry();
        setCountries(data);
      } catch (error) {
        console.error("왜 에러가 났을까 =>", error);
      }
    };

    fetchData();
  }, []);

  console.log("잘 불러온 나라 데이터=>", countries);

  return (
    <>
      <h2>Country</h2>
      <ul>
        {countries.map((country: Country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </ul>
    </>
  );
};

export default CountryList;
