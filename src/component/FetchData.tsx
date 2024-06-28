import { useEffect, useState } from "react";
import supabase from "../api/supabase";
import { Country, SaveCountry } from "../types/type";

const FetchData = () => {
  const [saveCountry, setSaveCountry] = useState<SaveCountry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("country").select();
      if (error) {
        console.log("error =>", error);
      } else {
        console.log("data =>", data);
        setSaveCountry(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="item">
          <h2>내가 선택한 나라</h2>
          <div className="list">
            {saveCountry.map((country: SaveCountry) => {
              return (
                <div key={`${country.id}`}>
                  <img
                    src={country.flag}
                    style={{ width: "250px", height: "150px" }}
                  />
                  <h3>{country.countryName}</h3>
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
