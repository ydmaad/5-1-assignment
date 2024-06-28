import { useState } from "react";
import { Country } from "../types/type";
import supabase from "../api/supabase";

const AddData = () => {
  const [countryName, setCountryName] = useState<Country[]>([]);
  const [flag, setFlag] = useState<Country[]>([]);

  const handleAdd = async (country: Country) => {
    const { data, error } = await supabase.from("country").insert([
      {
        countryName: country.name.common,
        flag: country.flags,
      },
    ]);
  };

  return <div>AddData</div>;
};

export default AddData;
