import React, { useEffect, useState } from 'react';
import './Coingraph.css';
import Chart from 'react-google-charts';

const Coingraph = ({ graphdata }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    const datacopy = [["Date", "Prices"]];
    
    if (graphdata && graphdata.prices && Array.isArray(graphdata.prices)) {
      graphdata.prices.forEach(item => {
        datacopy.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
      });
    }

    setData(datacopy);
  }, [graphdata]);

  return (
    <div className="coingraph-container">
      <Chart className='chart'
        data={data}
        chartType="LineChart"
        width="50vw"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default Coingraph;
