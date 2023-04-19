import React from "react";
import "./ResultsDisplay.css";
import moment from "moment";
import monthCounter from '../../utilities/utilities';



export default function ResultsDisplay({ displayData }) {
  let momentDurationFormatSetup = require("moment-duration-format");
  momentDurationFormatSetup(moment);

  const today = moment().toArray(); // today's date
  const [year, month, day] = today; // converting today's date into an array 
  const date = { year, month, day }; // converting the array into an object
  const diffDays = moment
    .duration(
      moment([date.year, date.month, date.day]).diff(
        moment([displayData.year, displayData.month - 1, displayData.day])
      )
    )
    .asDays();

  const currentData = {
    year: date[0],
    month: date[1],
    day: date[2],
  };
  const duration = moment
    .duration(diffDays, "days")
    .add(monthCounter(displayData, currentData), "days")
    .format();
  const numbers = duration.split(", ").map((str) => parseInt(str, 10));
  return (
    <section className="card-display">
      <div className="container">
        <span className="dynamic">{typeof displayData.year === 'string' ? displayData.year : numbers[0]}</span>
        <span>years</span>
      </div>
      <div className="container">
        <span className="dynamic">{typeof displayData.month === 'string' ? displayData.month :numbers[1]}</span>
        <span>months</span>
      </div>
      <div className="container">
        <span className="dynamic">{typeof displayData.day === 'string' ? displayData.day : numbers[2]}</span>
        <span>days</span>
      </div>
    </section>
  );
}
