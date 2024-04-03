import React from "react";
import ReactApexChart from "react-apexcharts";

const PayerMixChart = (props) => {
    const data =  props.chartsData;
    const payorMixVal = Object.values(data['Payer Type'])
    const payorMixSeriees = Object.values(data['Payer Percentage'])
    
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
          name: '',
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


// const data = props.chartData;

//   const netCollectionMonths = Object.values(data['Month of Date'])
//   const netCollectionValues = Object.values(data['Measure Values'])
//   console.log('MONTHS: ', netCollectionMonths);
//   console.log('VALS: ', netCollectionValues)

//   const combinedStrings = [];

//   for (let i = 0; i < netCollectionMonths.length; i++) {
//     const month = netCollectionMonths[i];
//     const percentage = (netCollectionValues[i] * 100).toFixed(1); // Convert to percentage and round to 1 decimal place
//     combinedStrings.push(`${month} ${percentage}%`);
//   }

//   console.log('COMBINED STRING: ', combinedStrings)

//   const vals_1 = [];
//   const vals_2 = []
//   const vals_3 = []
//   // Getting the first value
//   for (let i = 0; i < netCollectionValues.length; i += 3) {
//     const percentage = (netCollectionValues[i] * 100).toFixed(1);
//     vals_1.push(percentage); // Getting every third value thereafter
//   }

//   for (let i = 1; i < netCollectionValues.length; i += 3) {
//     const percentage = (netCollectionValues[i] * 100).toFixed(1);
//     vals_2.push(percentage); // Getting every third value thereafter
//   }

//   for (let i = 2; i < netCollectionValues.length; i += 3) {
//     const percentage = (netCollectionValues[i] * 100).toFixed(1);
//     vals_3.push(percentage); // Getting every third value thereafter
//   }

//   console.log('LIST VALUES 1: ', vals_1);
//   console.log('LIST VALUES 2: ', vals_2);
//   console.log('LIST VALUES 3: ', vals_3);
