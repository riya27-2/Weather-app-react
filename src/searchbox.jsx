import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';


export default function SearchBox({ updateInfo, setError }) {

  let [city, setCity] = useState("");

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");

      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError("");        
    } catch (err) {
      setError("No such place exists!");
      updateInfo(null);   
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <Box  mb={2}>
          <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            value={city}
            onChange={handleChange} 
            required
          />
          <LocationOnIcon style={{ marginTop: "4px",fontSize:"50px" }} />
        </Box>
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}
