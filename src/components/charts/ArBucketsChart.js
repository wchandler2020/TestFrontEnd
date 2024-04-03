import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import '../../interceptors/axios'
import ReactApexChart from "react-apexcharts";

const ArBucketsChart = (props) => {
  const data = props.chartData;
  const arMeasureNames = Object.values(data['Measure Names'])
  const arMeasureValues = Object.values(data['Measure Values'])

  function refactoredNumbers(arr) {
    let roundedArray = []
    for (let i = 0; i < arr.length; i++) {
      const number = parseFloat(arr[i].replace(/,/g, ''));
      const roundedNumber = Math.round(number);
      const finalNum = Math.round(roundedNumber / 1000) * 1000;
      roundedArray.push(finalNum.toLocaleString());
    }
  return roundedArray
  }
  
  const arMeasureNums_1 = refactoredNumbers(arMeasureValues).slice(0, 5)
  const arMeasureNums_2 = refactoredNumbers(arMeasureValues).slice(5, arMeasureValues.length)

  const series = [
    {
      name: '',
      type: 'column',
      data: arMeasureNums_1
    },
    {
      name: '',
      type: 'column',
      data: arMeasureNums_2
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    fill: {
      colors: ['#4897d8', '#5bc8ac']
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 0, 0],
    },
    title: {
      text: '',
      align: 'left',
      offsetX: 110,
    },
    xaxis: {
      categories: arMeasureNames,
    },
    yaxis: [
      // ... yaxis configuration remains the same
    ],
    tooltip: {
      // ... tooltip configuration remains the same
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="line" width="100%" height="240px" />
  );
};

export default ArBucketsChart;