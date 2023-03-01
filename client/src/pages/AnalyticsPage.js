import React, { useState } from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

import Chart from '../components/Chart';
import LogMenu from '../components/LogMenu';

import classes from './AnalyticsPage.module.css'

function AnalyticsPage (props)
{
  const [period, setPeriod] = useState("week");
  const [chart, setChart] = useState("weekday");
  const [logMenuOpen, setLogMenuOpen] = useState(false);

  const onChangePeriod = (event) =>
  {
    setPeriod(event.target.value);
    console.log (event.target.value);
  }

  const onChangeChart = (event) => 
  {
    setChart(event.target.value);
    console.log (event.target.value); 
  }

  const toggleLogMenu = () => 
  {
    setLogMenuOpen(!logMenuOpen);
  }

  return <div className={classes.container}> 
    { logMenuOpen && <LogMenu toggleLogMenu={toggleLogMenu} /> }

    <h1 className={classes.title}>Analytics</h1>
    <div className={classes.content}>
      <div className={classes.left}>
          { chart === "weekday" && <Chart CSStype={classes.chart} chartId={"63fd843d-f148-42f0-86c9-9f0d913f0e81"} chartURL={'https://charts.mongodb.com/charts-bin-project-bgtbp'} /> }
          { chart === "cuisine" && <Chart CSStype={classes.chart} chartId={"63fde537-e03b-4cc8-89b9-994e261c7559"} chartURL={'https://charts.mongodb.com/charts-bin-project-bgtbp'} /> }
          { chart === "dish" && <Chart CSStype={classes.chart} chartId={"63fdea94-46e8-4350-83fc-cbbb7149bc9f"} chartURL={'https://charts.mongodb.com/charts-bin-project-bgtbp'} /> }
          { chart === "time" && <Chart CSStype={classes.chart} chartId={"63fded30-46e8-43bb-85fc-cbbb714c5277"} chartURL={'https://charts.mongodb.com/charts-bin-project-bgtbp'} /> }
      </div>
      <div className={classes.right}>
        <h2>Graph Options</h2>
        <div className={classes.dropdownContainer}>
          <p className={classes.dropdownLabel}>Time Period</p>
          <select value={period} onChange={onChangePeriod} className={classes.dropdown}>
              <option value="week">7 Days</option>
              <option value="month">28 Days</option>
              <option value="three-months">90 Days</option>
              <option value="year">365 Days</option>
          </select>
        </div>
        <div className={classes.dropdownContainer}>
          <p className={classes.dropdownLabel}>Chart</p>
          <select value={chart} onChange={onChangeChart} className={classes.dropdown}>
              <option value="weekday">Waste by day</option>
              <option value="cuisine">Waste by cuisine</option>
              <option value="dish">Waste by dish</option>
              <option value="time">Waste over time</option>
          </select>
        </div>
        <div className={classes.dropdownContainer}>
          <p className={classes.dropdownLabel}>Last Updated: 5 mins</p>
          <FontAwesomeIcon icon={faRefresh} className={classes.refreshButton} />
        </div>
        <h2>Observations</h2>
        <ul>
          <li className={classes.observationItem}>The most wasteful day of the week has been Wednesdays for the last 6 weeks.</li>
          <li className={classes.observationItem}>Dal Curry is the most wasted dish, and Dabbawala is the most wasteful stall.</li>
          <li className={classes.observationItem}>There is 19% less wastage than last week. Well done!</li>
        </ul>
        <div className={classes.buttonDiv}>
          <button className={classes.button} onClick={toggleLogMenu}>Log Findings</button>
        </div>
      </div>
    </div>
  </div> 
}

export default AnalyticsPage; 