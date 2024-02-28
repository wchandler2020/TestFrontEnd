import React, {useState} from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const MonthlyCostChart = (props) => {
    const data =  props.chartData;
    console.log('month cost data: ', data)
    const monthlyCostVal = Object.values(data['# FTEs'])
    const monthYearVal = Object.values(data['Month of Month-Year'])
    const monthCostToCollect = Object.values['Monthly Cost to Collect']
    // const payorMixSeriees = Object.values(data['Payer Percentage'])
    
    
    const [chartData] = useState({
      series: [{
        name: monthCostToCollect,
        data: monthlyCostVal
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'bottom', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: monthYearVal,
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }
    });
    

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
        height="240px"
      />
    </div>
  );
};

export default MonthlyCostChart;