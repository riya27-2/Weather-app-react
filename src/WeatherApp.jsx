import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchbox";

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState("");   

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by Riya</h2>

      <SearchBox updateInfo={updateInfo} setError={setError} />

    
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!error && weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
