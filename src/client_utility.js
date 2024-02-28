import { char } from "stylis";

export const formatClientData = (client_name, chartTitle, chartValue) => {
    const passin_data = chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')
    if(client_name === 'Orth One'){
        if(String(passin_data).includes('MinProjectedNetRevenueVarianc')){
            // Define a regular expression to match words and numbers
            const data = passin_data
            let result = data.replace(/[^0-9,]/g, '').slice(1);
            return ['YoY Net Revenue', result]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('NetRevenueCurrentPreviousMonthPosNegFlag0Negative')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            const orginal_num = data_num.split('.')[1].slice(1)
            // Split the string by commas
            const parts = orginal_num.split(",");
            // Take the first element (which is "-1,014,146")
            const new_num = parts[0] + parts[1] + parts[2];
            const result = parseInt(new_num)
            return ['Monthly Net Revenue',result.toLocaleString('en-US')]
        }
        else if(String(passin_data).includes('ComparisonMonthCalc0CurrentMonth,CCRCurrentPreviousMonthPosNegFlag0Negative,DifferenceinAvgCleanClaimRate')){
            const data = passin_data
            let numericValue = data.match(/-?[\d.]+/)[0];
            // Converting the numeric value to the desired format
            let result = parseFloat(numericValue).toFixed(2);
            return ['Clean Claim Rate', 'result']
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,TotalARPosNegFlag0Negative,DifferenceinAvgARAmount')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            // Split the string by commas
            const parts = data_num.split(',');
            const result = parseInt(String(parts[2]+parts[3]+parts[4]).slice(2));
            return ['Total AR', result.toLocaleString('en-US')]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,ARDaysCurrentPreviousMonthPosNegFlag0Positive,DifferenceinAvg.ARDays')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let split_data_num = data_num.split(',')
            let result = String(split_data_num[2]).slice(2)
            return ['AR Days Outstanding', result]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,ClaimVolumeCurrentPreviousMonthPosNegFlag0Negative,DifferenceinAvgTotalClaimCount0')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let parts = data_num.split(',')
            let result = parseFloat(String(parts[2]+'.' + parts[3]).slice(2));
            return ['Claim Volume', result]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,TotalChargesCurrentPreviousMonthPosNegFlag0Negative,DifferenceinAvg.ChargesAmount')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let parts = data_num.split(',')
            const result =  parseInt(String(parts[2]+parts[3]+parts[4]).slice(2));
            return ['Total Charges', result.toLocaleString('en-US')]
        }
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,FEDRCurrentPreviousMonthPosNegFlag0Positive,DifferenceinAvgDenial')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let num = data_num.split(',')
            let newnum = num[2].slice(2)
            let convertedNum = parseFloat(newnum)
            let roundedNum = Math.abs(convertedNum).toFixed(2)
            let result = convertedNum < 0 ? '-' + roundedNum : roundedNum;
            return ['Front End Denial Rate', result]
        }
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,Pre-AuthChecksPosNegFlag0Negative,DifferenceinAvgDailyPriorAuthorizations')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let num = data_num.split(',')
            let newnum = num[2].slice(2)
            let result = parseFloat(newnum)
            return ['Daily Pre-Cert Submissions', result]
        }
        
//////////////////////////////////////END ITEM I///////////////////////////////////////////////////////////////  
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('Min2023ProjectedNetRevenue')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = data_num.slice(6).split('.')[0]
            return ['2023(Proj.): ', result]
        }     
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('DateTooltip0Dec2023,Avg.DailyPriorAuthorizations089')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let str_num = data_num.split(',').splice(1)
            let num = parseFloat(str_num)
            let result = num * 1000
            return ['Current: ', result]
        }
        
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('DenialInfoTooltip0null,Denial')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = data_num.split(',')
            result = result[2].slice(1)
            return ['Current: ', result]
        }
        
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('DateTooltip0Dec2023')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = null;
            if(data_num.includes('.')){
                result = data_num.slice(7).split('.')[0] + '.' + data_num.slice(7).split('.')[1]
            }else{
                result = data_num.slice(7).split('.')[0]
            }
            return ['Current: ', result]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('Min2022NetRevenue')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = data_num.slice(6).split('.')[0]
            return ['2022: ', result]
        }
        else if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('BaselineTooltip0null')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = null;
            let num = data_num.slice(6)
            let new_num = num.split('.')
            result = new_num[1].replace('0', '').split(',').join('')
            result = parseInt(result)
            result = Math.floor(result) / 10;
            return ['Previous Month: ', result.toLocaleString('en-US')]
        }
        
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,ARDaysCurrentPreviousMonthPosNegFlag0Positive,DifferenceinAvg')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = data_num.split(',')
            return ['AR Days Outstanding', result[2].slice(2)]
        }
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,TotalChargesCurrentPreviousMonthPosNegFlag0Negative,DifferenceinAvg')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let result = data_num.split('.')
            return ['Total Charges', result[1].slice(1)]
        }
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('ComparisonMonthCalc0CurrentMonth,FEDRCurrentPreviousMonthPosNegFlag0Negative,DifferenceinAvg.Denial')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            let num = data_num.split(',')
            let newnum = num[2].slice(2)
            let convertedNum = parseFloat(newnum)
            let roundedNum = Math.abs(convertedNum).toFixed(2)
            let result = convertedNum < 0 ? '-' + roundedNum : roundedNum;
            return ['Front End Denial Rate', result]
        }
        if(String(chartTitle.replace(/[^a-zA-Z0-9,\-]/g, '')).includes('AuthChecksPosNegFlag0Negative,DifferenceinAvg.DailyPriorAuthorizations')){
            let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
            
            let num = data_num.split(',')
            let newnum = num[2].slice(2)
            let result = parseFloat(newnum)
            return ['Front End Denial Rate', result]
        }
        // if(String(chartTitle).includes('DateTooltip0Dec2023,Avg.DailyPriorAuthorizations')){
        //     let data_num = String(chartTitle).replace(/[^\d\.,-]/g, '')
        //     // let result = data_num.split('.')
        //     return ['Current:', 'toads']
        // }
        
    }
}



  