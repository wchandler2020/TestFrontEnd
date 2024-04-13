

export const formatClientData = (dataName) => {   
    if(dataName == null){
        return 'YoY Net NetRevue'
    }
    if(String(dataName).includes('Min. Projected Net Revenue Variance')){
        return ['YoY Net Revenue']
    }
    else if(String(dataName).includes('NCR Current/Previous Month Pos/Neg Flag')){
        // const num = data_values[1]
        // const percentageNumber = parseFloat(num); // Convert string to number
        // const result = percentageNumber.toFixed(2);
        return 'Net Collected Revenue'
    }
    else if(String(dataName).includes('Net Revenue Current/Previous Month Pos/Neg Flag')){
        // const result = dataValue
        return 'Monthly Net Revenue'
    }
    else if(String(dataName).includes('CCR Current/Previous Month Pos/Neg Flag')){  
        // const num = dataValue
        // const floatValue = parseFloat(num); // Convert string to floating-point number
        // const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        // const result = `${roundedValue}%`; 
        return 'Clean Claim Rate'
    }

    else if(String(dataName).includes('Total AR Pos/Neg Flag')){
        return 'Total AR'
    }
    else if(String(dataName).includes('AR Days Current/Previous Month Pos/Neg Flag')){
        // const result = dataValue
        return 'AR Days Outstanding'
    }
    else if(String(dataName).includes('Total Charges Current/Previous Month Pos/Neg Flag')){
        // const result = dataValue
        return 'Total Charges'
    }
    else if(String(dataName).includes('FEDR Current/Previous Month Pos/Neg Flag')){
        // const num = dataValue
        // const floatValue = parseFloat(num); // Convert string to floating-point number
        // const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        // const result = `${roundedValue}%`; 
        return 'Front End Denial Rate'
    }
    else if(String(dataName).includes('Pre-Auth Checks Pos/Neg Flag')){
        // const result = data_values[2]["0"]
        return 'Daily Pre-Cert Submissions'
    }
    else if(String(dataName).includes('FE Denial Amts Pos/Neg Flag')){
        // const result = dataValue
        return 'Total Denials'
    }
    else if(String(dataName).includes('EV Checks Pos/Neg Flag')){
        // const num = dataValue
        // const result = num.toFixed(1); // Round to one decimal place
        return 'Daily Eligibility Checks'
    }
    else if(String(dataName).includes('Claim Volume Current/Previous Month Pos/Neg Flag')){
        // const result = data_values[2]["0"]
        return 'Claim Volume'
    }
    else if(String(dataName).includes('Min. 2023 Projected Net Revenue')){
        // const result = data_values[0]["0"]
        return '2023(Proi): '
    }
    else if(String(dataName).includes('Date Tooltip')){
        // const result = dataValue
        return 'Current Month: '
    }
    else if(String(dataName).includes('Min. 2022 Net Revenue')){
        // const result = data_values[0]["0"]
        return '2022: '
    }
    else if(String(dataName).includes('Baseline Tooltip')){
        // const result = data_values[2]["0"]
        return 'Baseline:  '
    }
    else if(String(dataName).includes('Date Tooltip')){
        // const result = data_values[2]["0"]
        return 'Previous Month:  '
    }
}

export  const formatNumber = (number) => {
    // Return 0 if the number is null
    if (number === null) {
      return '0';
    }
  
    // Remove commas and dollar signs
    let num = number.toString().replace(/[$,]/g, '');
  
    // Check if the number ends with a percentage sign
    const isPercentage = num.endsWith('%');
  
    // Remove percentage sign if present
    if (isPercentage) {
      num = num.slice(0, -1);
    }
  
    // Parse the number
    let parsedNum = parseFloat(num);
  
    // If parsing fails, return the original string
    if (isNaN(parsedNum)) {
      return number;
    }
  
    // Format the number with commas and without trailing zeros
    let formattedNum = parsedNum.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  
    // Add percentage sign if necessary
    if (isPercentage) {
      formattedNum += '%';
    }
  
    // Otherwise, return the formatted number
    return formattedNum;
  }
  
 
  
  
  

  