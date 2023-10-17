import React from "react";

function Forecast(props) {
  return (
    <table className="forecast-table">
      {props.selectedDays.map((day) => (
        <tbody className="forecast-tb">
          <tr className={day == "Sun" || day == "Sat" ? "red" : "blue"}>
            {day}
          </tr>
          <tr>{props.weatherForecast[day]?.temperature}</tr>
          <tr>
            <img
              src={props.weatherForecast[day]?.image}
              className="forecast-image"
            />
          </tr>
          <tr>{props.weatherForecast[day]?.conditions}</tr>
        </tbody>
      ))}
    </table>
  );
}
export default Forecast;
