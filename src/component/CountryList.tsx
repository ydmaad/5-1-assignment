import { useEffect, useState } from "react";
import { Country, SaveCountry } from "../types/type";
import { getCountry } from "../api/fetchApi";
import CountryCard from "./CountryCard";
import "./CountryList.css";
import supabase from "../api/supabase";
import FetchData from "./FetchData";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<SaveCountry[]>([]);
  const [selectCountry, setSelectCountry] = useState<SaveCountry[]>([]);

  const sortLogic = (a: SaveCountry, b: SaveCountry) => {
    if (a.countryName < b.countryName) return -1;
    if (a.countryName > b.countryName) return 1;
    return 0;
  };

  // 비동기 함수로 나라 데이터를 countries에 업데이트
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Country[] = await getCountry();
        const newData: SaveCountry[] = data.map((data) => {
          return {
            id: data.area,
            countryName: data.name.common,
            flag: data.flags.png,
          };
        });
        const sortList = newData.sort(sortLogic);
        setCountries(sortList);
      } catch (error) {
        console.error("왜 에러가 났을까 =>", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("country").select();
      if (error) {
        console.log("error =>", error);
      } else {
        console.log("data =>", data);
        setSelectCountry(data);
      }
    };
    fetchData();
  }, []);

  const handleSelectedCountry = async (country: SaveCountry) => {
    const newSelectedCountry = selectCountry.filter(
      (c) => c.countryName !== country.countryName
    );
    newSelectedCountry.sort(sortLogic);
    setSelectCountry(newSelectedCountry);

    const newCountry = [...countries, country];
    newCountry.sort(sortLogic);
    setCountries(newCountry);

    const { data, error } = await supabase
      .from("country")
      .delete()
      .eq("id", country.id);

    if (error) {
      console.error("에러났네", error);
    } else {
      console.log("잘 삭제됐네", data);
    }
  };

  const handleCountry = async (country: SaveCountry) => {
    const newCountry = countries.filter(
      (c) => c.countryName !== country.countryName
    );
    newCountry.sort(sortLogic);
    setCountries(newCountry);

    const newSelectedCountry = [...selectCountry, country];
    newSelectedCountry.sort(sortLogic);

    setSelectCountry(newSelectedCountry);

    const { data, error } = await supabase.from("country").insert([
      {
        id: country.id,
        countryName: country.countryName,
        flag: country.flag,
      },
    ]);
    if (error) {
      console.error("에러났네", error);
    } else {
      console.log("잘 추가됐네", data);
    }
  };

  return (
    <>
      <FetchData
        clickCountry={handleSelectedCountry}
        selectCountry={selectCountry}
      />
      <div className="container">
        <div className="item">
          <h2>그냥 나라</h2>
          <div className="list">
            {countries.map((country: SaveCountry) => {
              return (
                <div key={`${country.countryName}`}>
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
