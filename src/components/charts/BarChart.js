import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import '../../interceptors/axios'

const ColumnChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.tableData);
  }, []);  

  const mixedChartOptions = {
    chart: {
      id: "mixed-chart",
    },
    xaxis: {
      categories: chartData,
    },
  };

  const mixedChartSeries = [
    {
      name: "Sales",
      type: "bar",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 145, 160],
    },
    {
      name: "Profit",
      type: "bar",
      data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
    },
  ];

  // Adjust the series data to match the categories
  const filteredSeries = mixedChartSeries.map((series) => ({
    ...series,
    data: series.data.slice(0, 5), // Slice data to match the number of categories
  }));

  return (
    <Chart
      options={mixedChartOptions}
      series={filteredSeries}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default ColumnChart;