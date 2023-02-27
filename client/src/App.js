import React from 'react';
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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => [356, 235, 856, 23, 856, 996, 543, 123, 34, 346]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => [236, 834, 325, 76, 325, 769, 35, 679, 235, 568]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}







// import './App.css';
// import { Line } from 'react-chartjs-2';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Line
//           datasetIdKey='id'
//           data={{
//             labels: ['Jun', 'Jul', 'Aug'],
//             datasets: [
//               {
//                 id: 1,
//                 label: '',
//                 data: [5, 6, 7],
//               },
//               {
//                 id: 2,
//                 label: '',
//                 data: [3, 2, 1],
//               },
//             ],
//           }}
//         />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
