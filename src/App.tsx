import { useEffect } from "react";
import { getCountry } from "./api/fetchApi";

const App = () => {
  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div>FetchApi</div>
    </>
  );
};

export default App;
