import { Country } from "../types/type";

export async function getCountry(): Promise<Country[]> {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}
