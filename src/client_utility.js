

export const formatClientData = (dataList) => {
        console.log('the data: ', dataList)
        const dataName = dataList[0]
        const dataValue = dataList[1]
        const dataName2 = dataList
    if(String(dataName).includes('Min. Projected Net Revenue Variance')){
        return ['YoY Net Revenue', 'result']
    }
    else if(String(dataName).includes('NCR Current/Previous Month Pos/Neg Flag')){
        const num = dataValue
        const percentageNumber = parseFloat(num); // Convert string to number
        const result = percentageNumber.toFixed(2);

        return ['Net Collected Revenue', result]
    }
    else if(String(dataName).includes('Net Revenue Current/Previous Month Pos/Neg Flag')){
        const result = dataValue
        return ['Monthly Net Revenue', result]
    }
    else if(String(dataName).includes('CCR Current/Previous Month Pos/Neg Flag')){  
        const num = dataValue
        const floatValue = parseFloat(num); // Convert string to floating-point number
        const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        const result = `${roundedValue}%`; 
        return ['Clean Claim Rate', result]
    }

    else if(String(dataName).includes('Total AR Pos/Neg Flag')){
        const result = dataValue
        return ['Total AR', result]
    }
    else if(String(dataName).includes('AR Days Current/Previous Month Pos/Neg Flag')){
        const result = dataValue
        return ['AR Days Outstanding', result]
    }
    else if(String(dataName).includes('Total Charges Current/Previous Month Pos/Neg Flag')){
        const result = dataValue
        return ['Total Charges', result]
    }
    else if(String(dataName).includes('FEDR Current/Previous Month Pos/Neg Flag')){
        const num = dataValue
        const floatValue = parseFloat(num); // Convert string to floating-point number
        const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        const result = `${roundedValue}%`; 
        return ['Front End Denial Rate', result]
    }
    // else if(String(data_keys[1]).includes('Pre-Auth Checks Pos/Neg Flag')){
    //     const result = data_values[2]["0"]
    //     return ['Daily Pre-Cert Submissions', 'result']
    // }
    else if(String(dataName).includes('FE Denial Amts Pos/Neg Flag')){
        const result = dataValue
        return ['Total Denials', result]
    }
    else if(String(dataName).includes('EV Checks Pos/Neg Flag')){
        const num = dataValue
        const result = num.toFixed(1); // Round to one decimal place
        return ['Daily Eligibility Checks', result]
    }
    // else if(String(data_keys[1]).includes('Claim Volume Current/Previous Month Pos/Neg Flag')){
    //     const result = data_values[2]["0"]
    //     return ['Claim Volume', 'result']
    // }
    // else if(String(data_keys[0]).includes('Min. 2023 Projected Net Revenue')){
    //     const result = data_values[0]["0"]
    //     return ['2023(Proi): ', 'result']
    // }
    else if(String(dataName2).includes('Date Tooltip')){
        const result = dataValue
        return ['Current: ', result]
    }
    // else if(String(data_keys[0]).includes('Min. 2022 Net Revenue')){
    //     const result = data_values[0]["0"]
    //     return ['2022: ', 'result']
    // }
    else if(String(dataName).includes('Baseline Tooltip')){
        // const result = data_values[2]["0"]
        return ['Baseline:  ', 'result']
    }
    // else if(String(data_keys[1]).includes('Date Tooltip')){
    //     const result = data_values[2]["0"]
    //     return ['Previous Month:  ', 'result']
    // }
}



  