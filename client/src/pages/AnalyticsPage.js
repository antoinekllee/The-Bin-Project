import React, { useEffect } from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

import Chart from '../components/Chart';

import classes from './AnalyticsPage.module.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    maintainAspectRatio: false
  };

  export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [356, 235, 856, 23, 856, 996, 543],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
      {
        label: 'Dataset 2',
        data: [236, 834, 325, 76, 325, 769, 35],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

// Create a new Date() object and set it to 2022-12-01
const todayDate = new Date('2022-12-01');

// Create a new Date() object called lastWeekDate and set it to 7 days before the date object
const lastWeekDate = new Date(todayDate);
lastWeekDate.setDate(lastWeekDate.getDate() - 7);

// Create a new Date() object called lastMonthDate and set it to 28 days before the date object
const lastMonthDate = new Date(todayDate);
lastMonthDate.setDate(lastMonthDate.getDate() - 28);

// Create a new Date() object called lastYearDate and set it to 90 days before the date object
const lastYearDate = new Date(todayDate);
lastYearDate.setDate(lastYearDate.getDate() - 90);

// Create a new Date() object called lastYearDate and set it to 365 days before the date object
const lastDecadeDate = new Date(todayDate);
lastDecadeDate.setDate(lastDecadeDate.getDate() - 365);

const charts = [
  {
    name: "weekday",
    id: '63fd843d-f148-42f0-86c9-9f0d913f0e81',
    url: 'https://charts.mongodb.com/charts-bin-project-bgtbp', 
  }
]

// const filters = [
//   // Filter between two dates (inclusive)
//   {
//     "type": "timeRange",
//     "field": "date",
//     "params": {
//       "start": "2021-05-01T00:00:00.000Z",
//       "end": "2021-05-07T00:00:00.000Z"
//     }
//   },
// ]


function AnalyticsPage (props)
{
  return <div className={classes.container}> 
      <h1 className={classes.title}>Analytics</h1>
      <div className={classes.content}>
          <div className={classes.left}>
              {/* <Chart CSStype="chart2" height={'400px'} width={'600px'} chartId={'63fd843d-f148-42f0-86c9-9f0d913f0e81'} chartURL={'https://charts.mongodb.com/charts-bin-project-bgtbp'} filter={filters[0]} /> */}
              {/* Chartjs chart */}
              <Bar data={data} options={options} />
          </div>
          <div className={classes.right}>
              <label>Time Period</label>
              <select name="time-period" id="time-period">
                  <option value="week">7 Days</option>
                  <option value="month">28 Days</option>
                  <option value="three-months">90 Days</option>
                  <option value="year">365 Days</option>
              </select>
              <br />
              <label>Chart</label>
              <select name="time-period" id="time-period">
                  <option value="weekday">Waste by day</option>
                  <option value="cuisine">Waste by cuisine</option>
                  <option value="dish">Waste by dish</option>
                  <option value="time">Waste over time</option>
              </select>
              <p>Last Updated: 5 mins</p>
              <FontAwesomeIcon icon={faRefresh} />
              <p>Observations:</p>
              <ul>
                <li>The most food is wasted on Wednesday</li>
                <li>There is 30% less wastage than last week. Well done!</li>
              </ul>
              <button>Log Findings</button>
          </div>
      </div>
  </div> 
}

export default AnalyticsPage; 