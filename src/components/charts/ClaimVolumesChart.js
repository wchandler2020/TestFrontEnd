import React, { useState } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const ClaimVolumesChart = (props) => {
  const data = props.chartData;
  console.log("claim volume data: ", data);
  const claimVolumeMonths = Object.values(data['Month of Date'])
  const claimVolumeValues = Object.values(data['Total Claim Count'])
  console.log(claimVolumeMonths)

  // const payorMixSeriees = Object.values(data['Payer Percentage'])
  const seriesData = [
    {
      name: "TEST",
      data: claimVolumeValues,
    },
  ];

  const optionsData = {
    chart: {
      height: '100%',
      width: '100%',
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Testing",
      align: "center",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Mar2023', 'Apr2023', 'May2023', 'June2023', 'July2023', 'Aug 2023', 'Sept2023', 'Oct2023', 'Nov2023', 'Dec2023'],
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

export default ClaimVolumesChart;
