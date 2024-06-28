import { useEffect, useState } from "react";
import supabase from "../api/supabase";
import { SaveCountry } from "../types/type";
import CountryCard from "./CountryCard";

interface FetchDataProps {
  clickCountry: (country: SaveCountry) => void;
  selectCountry: SaveCountry[];
}

const FetchData = ({ clickCountry, selectCountry }: FetchDataProps) => {
  // const [saveCountry, setSaveCountry] = useState<SaveCountry[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from("country").select();
  //     if (error) {
  //       console.log("error =>", error);
  //     } else {
  //       console.log("data =>", data);
  //       setSaveCountry(data);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="container">
        <div className="item">
          <h2>내가 선택한 나라</h2>
          <div className="list">
            {selectCountry.map((country: SaveCountry) => {
              return (
                <div key={`${country.countryName}`}>
                  <CountryCard country={country} clickCountry={clickCountry} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchData;
