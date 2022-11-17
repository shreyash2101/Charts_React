import React, { useEffect, useState } from "react";
import ChartData from "../assets/chartData";
import "./chart.css";

function BarChart() {
  const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
    ChartData().then((res) => {
      setBarChartData(res);
    });
  }, []);
  const findMaxValue=()=>{
    const data = [...barChartData]
    data.sort((a,b)=>b.y-a.y)
    return data[0].y
  }
  return (
    <div className="container">
      <div className="chartContainer">
      <div className="Yaxis">
        <h3>Y-Axis</h3>
      </div>
        <div className="labelYContainer">
          {barChartData.map((data, index) => {
            return (
              <div
                key={index}
                className="chartLabelY"
                style={{ height: findMaxValue()*0.01 }}
              >
                {barChartData.length - index}k
              </div>
            );
          })}
        </div>
        {barChartData.map((data, index) => {
          return (
            <div
              key={index}
              className="chart"
              style={{ height: data.y * 0.07 }}
            ></div>
          );
        })}
      </div>
      <div className="labelXContainer">
        <div className="chartLabelX"></div>
        <div className="chartLabelX"></div>
        {barChartData.map((data, index) => {
          return (
            <div key={index} className="chartLabelX">
              {data.x}
            </div>
          );
        })}
      </div>
      <div>
        <h3>X-Axis</h3>
      </div>
    </div>
  );
}

export default BarChart;
