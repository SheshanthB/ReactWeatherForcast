import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { weatherData } from "./WeatherData";
import Forecast from "./Forecast";

function DateSelector() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [weatherForecast, setWeatherForcast] = useState({});
  const [selectedDays, setSelectedDays] = useState([]);

  const handleStartDate = (date) => {
    setStartDate(date);
    setEndDate(null);
    setSelectedDays([]);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = [];
    while (start <= end) {
      days.push(start.toLocaleDateString("en-US", { weekday: "short" }));
      start.setDate(start.getDate() + 1);
    }
    setSelectedDays(days);
  };
  const loadWeatherData = () => {
    setWeatherForcast(weatherData);
  };

  return (
    <div className="App-link">
      <label className="date-selector">From</label>
      <ReactDatePicker
        selected={startDate}
        onChange={handleStartDate}
        dateFormat={"dd/MM/yyyy"}
        maxDate={endDate ? new Date(endDate) : null}
      />

      <label className="date-selector">To</label>
      <ReactDatePicker
        selected={endDate}
        onChange={handleEndDate}
        dateFormat={"dd/MM/yyyy"}
        minDate={startDate ? new Date(startDate) : null}
        maxDate={
          startDate ? startDate.getTime() + 6 * 24 * 60 * 60 * 1000 : null
        }
      />

      <button onClick={loadWeatherData}>Submit</button>
      <div className="App-header">
        <Forecast
          selectedDays={selectedDays}
          weatherForecast={weatherForecast}
        />
      </div>
    </div>
  );
}

export default DateSelector;
