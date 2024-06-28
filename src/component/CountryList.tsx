import { useEffect, useState } from "react";
import { Country } from "../types/type";
import { getCountry } from "../api/fetchApi";
import CountryCard from "./CountryCard";
import "./CountryList.css";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectCountry, setSelectCountry] = useState<Country[]>([]);

  const sortLogic = (a: Country, b: Country) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  };

  // 비동기 함수로 나라 데이터를 countries에 업데이트
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Country[] = await getCountry();
        const sortList = data.sort(sortLogic);
        setCountries(sortList);
      } catch (error) {
        console.error("왜 에러가 났을까 =>", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectedCountry = (country: Country): void => {
    const newSelectedCountry = selectCountry.filter(
      (c) => c.name.common !== country.name.common
    );
    newSelectedCountry.sort(sortLogic);
    setSelectCountry(newSelectedCountry);

    const newCountry = [...countries, country];
    newCountry.sort(sortLogic);
    setCountries(newCountry);
  };

  const handleCountry = (country: Country): void => {
    const newCountry = countries.filter(
      (c) => c.name.common !== country.name.common
    );
    newCountry.sort(sortLogic);
    setCountries(newCountry);

    const newSelectedCountry = [...selectCountry, country];
    newSelectedCountry.sort(sortLogic);

    setSelectCountry(newSelectedCountry);
  };

  return (
    <>
      <div className="container">
        <div className="item">
          <h2>내가 선택한 나라</h2>
          <div className="list">
            {selectCountry.map((country: Country) => {
              return (
                <div key={`${country.name.common}`}>
                  <CountryCard
                    country={country}
                    clickCountry={handleSelectedCountry}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <h2>그냥 나라</h2>
          <div className="list">
            {countries.map((country: Country) => {
              return (
                <div key={`${country.name.common}`}>
                  <CountryCard country={country} clickCountry={handleCountry} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
