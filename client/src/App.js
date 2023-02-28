import React from 'react';

import Navbar from './components/Navbar';
import AnalyticsPage from './pages/AnalyticsPage';

export default function App() 
{
  return <div>
    {/* <div>Bar</div>#316644 */}
    {/* <Bar options={options} data={data} /> */}
    <Navbar />
    <AnalyticsPage />
  </div>;
}