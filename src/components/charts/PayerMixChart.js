import React from "react";
import ReactApexChart from "react-apexcharts";

const PayerMixChart = (props) => {
    const data =  props.chartsData;
    const payorMixVal = Object.values(data['Payer Type'])
    const payorMixSeriees = Object.values(data['Payer Percentage'])
    console.log('series data: ', data)
    const options = {
        chart: {
          type: 'bar',
          height: 350,
          zoom: {
            enabled: true,
          },
        },
        fill: {
          colors: ['#5bc8ac']
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 6,
            columnWidth: '60%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: payorMixVal,
        },
        yaxis: {
          title: {
            text: '',
          },
        },
      };
    
      const series = [
        {
          name: 'Sales',
          data: payorMixSeriees,
        },
      ];
    

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="240px"
      />
    </div>
  );
};

export default PayerMixChart;


// const PayerMixChart = (props) => {
//   const [chartData, setChartData] = useState([]);
//   const [chartOptions, setChartOptions] = useState({});

// //   useEffect(() => {
// //     setChartData(props.chartData);
// //     setChartOptions(props.tableData);
// //   }, [props.chartData, props.tableData]);
// //   console.log('CHART DATA: ', chartData)

//   let options = {
//     series: [{
//     data: [400, 430, 448, 470, 540, 580, 690]
//   }],
//     chart: {
//     type: 'bar',
//     height: 350
//   },
//   annotations: {
//     xaxis: [{
//       x: 500,
//       borderColor: '#00E396',
//       label: {
//         borderColor: '#00E396',
//         style: {
//           color: '#fff',
//           background: '#00E396',
//         },
//         text: 'X annotation',
//       }
//     }],
//     yaxis: [{
//       y: 'July',
//       y2: 'September',
//       label: {
//         text: 'Y annotation'
//       }
//     }]
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true,
//     }
//   },
//   dataLabels: {
//     enabled: true
//   },
//   xaxis: {
//     categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   },
//   grid: {
//     xaxis: {
//       lines: {
//         show: true
//       }
//     }
//   },
//   yaxis: {
//     reversed: false,
//     axisTicks: {
//       show: true
//     }
//   }
//   };

//   return (
//     <Chart
//       options={options}
//     //   series={filteredSeries}
//       type="bar"
//       width="100%"
//       height="100%"
//     />
//   );
// };

// export default PayerMixChart;
