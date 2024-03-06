import React, { useState } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const ClaimVolumesChart = (props) => {
  const data = props.chartData;
  const claimVolumeMonths = Object.values(data['Month of Date'])
  const claimVolumeValues = Object.values(data['Total Claim Count'])
  const seriesData = [
    {
      name: "",
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
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    colors: ['#5bc8ac'],
    xaxis: {
      categories: claimVolumeMonths
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
