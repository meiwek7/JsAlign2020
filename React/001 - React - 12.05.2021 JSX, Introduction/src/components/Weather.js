import React from "react";

let WeatherComp = (props) => {
  let { city, temperature } = props;
  return (
    <div>
      Today in {city} is {temperature} celsius degree
    </div>
  );
};

export default WeatherComp;
