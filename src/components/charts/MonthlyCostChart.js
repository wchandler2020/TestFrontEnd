import React, {useState} from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const MonthlyCostChart = (props) => {
    const data =  props.chartData;
    const monthlyCostVal = Object.values(data['# FTEs'])
    const monthYearVal = Object.values(data['Month of Month-Year'])
    const monthCostToCollect = Object.values['Monthly Cost to Collect']
    console.log('month value', monthlyCostVal)
    console.lgo('monhth year value', monthYearVal)
    console.log('monthCostCollection', monthCostToCollect)
    // const payorMixSeriees = Object.values(data['Payer Percentage'])
    
    
    const [chartData] = useState({
      series: [{
        name: monthCostToCollect,
        data: monthlyCostVal
      }],
      options: {
        id: 'monthChart',
        chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: true,
          }
        },
        fill: {
          colors: ['#5bc8ac']
        },
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '60%',
            dataLabels: {
              position: 'center', // top, center, bottom
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
            marginBottom: '20px',
            paddingBottom: '10px',
            fontSize: '10px',
            fontWeight: 400,
            colors: ["#f1f1f2"]
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