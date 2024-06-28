import { useEffect, useState } from "react";
import supabase from "../api/supabase";
import { Country } from "../types/type";

const FetchData = () => {
  const [saveCountry, setSaveCountry] = useState<Country[]>([]);

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
      <div>
        <h2>supabase에 저장된 나라</h2>
        {saveCountry.map((country) => {
          return <div key={country}></div>;
        })}
      </div>
      ;
    </>
  );
};

export default FetchData;
