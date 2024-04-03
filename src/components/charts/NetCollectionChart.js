import React from "react";
import ReactApexChart from "react-apexcharts";

const NetCollectionChart = (props) => {
  const data = props.chartData;

  const netCollectionMonths = Object.values(data['Month of Date'])
  const netCollectionValues = Object.values(data['Measure Values'])


  const combinedStrings = [];

  for (let i = 0; i < netCollectionMonths.length; i++) {
    const month = netCollectionMonths[i];
    const percentage = (netCollectionValues[i] * 100).toFixed(1); // Convert to percentage and round to 1 decimal place
    combinedStrings.push(`${month} ${percentage}%`);
  }

  const vals_1 = [];
  const vals_2 = []
  const vals_3 = []
  const months = []
  // Getting the first value
  for (let i = 0; i < netCollectionValues.length; i += 3) {
    const percentage = (netCollectionValues[i] * 100).toFixed(2);
    vals_1.push(parseFloat(percentage)); // Getting every third value thereafter
  }

  for (let i = 1; i < netCollectionValues.length; i += 3) {
    const percentage = (netCollectionValues[i] * 100).toFixed(2);
    vals_2.push(parseFloat(percentage)); // Getting every third value thereafter
  }

  for (let i = 2; i < netCollectionValues.length; i += 3) {
    const percentage = (netCollectionValues[i] * 100).toFixed(2);
    vals_3.push(parseFloat(percentage)); // Getting every third value thereafter
  }

  for (let i = 0; i < netCollectionMonths.length; i += 3) {
    months.push(netCollectionMonths[i]); // Getting every third value thereafter
  }

  const seriesData =[{
    name: "",
    data: vals_1
  },
  {
    name: "",
    data: vals_2
  },
  {
    name: "",
    data: vals_3
  },
];

  const optionsData = {
    chart: {
      height: '100%',
      width: '100%',
      type: "line",
      zoom: {
        enabled: true,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "",
      align: "center",
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    colors: ['#5bc8ac', '#4897d8', '#f8a055'],
    plotOptions: {
      line: {
        strokeWidth: 1, // Adjust this value to make the lines thinner
      },
    },
    xaxis: {
      categories: months,
    },
  };

  return (
    <div>
      <ReactApexChart
        options={optionsData}
        series={seriesData}
        type="line"
        width="100%"
        height="240px"
      />
    </div>
  );
};

export default NetCollectionChart;
