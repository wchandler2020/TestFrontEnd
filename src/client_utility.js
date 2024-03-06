import { char } from "stylis";
import Conversion from "views/admin/default/components/PieCard";

export const formatClientData = (data_list) => {
    const data_keys = Object.keys(data_list)
    const data_values = Object.values(data_list)

    if(String(data_keys[0]).includes('Min. Projected Net Revenue Variance')){
        const result = data_values[0]["0"]
        return ['YoY Net Revenue', result]
    }
    else if(String(data_keys[2]).includes('% Difference in Avg. Net Collections Rate')){
        const num = data_values[2]["0"]
        const floatValue = parseFloat(num); // Convert string to float
        const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        const result =  `${roundedValue}%`; 
        return ['Net Collected Revenue', result]
    }
    else if(String(data_keys[1]).includes('Net Revenue Current/Previous Month Pos/Neg Flag')){
        const result = data_values[2]["0"]
        
        return ['Monthly Net Revenue', result]
    }
    else if(String(data_keys[1]).includes('CCR Current/Previous Month Pos/Neg Flag')){  
        const num = data_values[2]["0"]
        const floatValue = parseFloat(num); // Convert string to floating-point number
        const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        const result = `${roundedValue}%`; 
        return ['Clean Claim Rate', result]
    }

    else if(String(data_keys[1]).includes('Total AR Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['Total AR', result]
    }
    else if(String(data_keys[1]).includes('AR Days Current/Previous Month Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['AR Days Outstanding', result]
    }
    else if(String(data_keys[1]).includes('Total Charges Current/Previous Month Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['Total Charges', result]
    }
    else if(String(data_keys[1]).includes('FEDR Current/Previous Month Pos/Neg Flag')){
        const num = data_values[2]["0"]
        const floatValue = parseFloat(num); // Convert string to floating-point number
        const roundedValue = floatValue.toFixed(2); // Round to two decimal places
        const result = `${roundedValue}%`; 
        return ['Front End Denial Rate', result]
    }
    else if(String(data_keys[1]).includes('Pre-Auth Checks Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['Daily Pre-Cert Submissions', result]
    }
    else if(String(data_keys[1]).includes('FE Denial Amts Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['Total Denials', result]
    }
    else if(String(data_keys[1]).includes('EV Checks Pos/Neg Flag')){
        const num = data_values[2]["0"]
        const result = num.toFixed(1); // Round to one decimal place
        return ['Daily Eligibility Checks', result]
    }
    else if(String(data_keys[1]).includes('Claim Volume Current/Previous Month Pos/Neg Flag')){
        const result = data_values[2]["0"]
        return ['Claim Volume', 'result']
    }
    else if(String(data_keys[0]).includes('Min. 2023 Projected Net Revenue')){
        const result = data_values[0]["0"]
        return ['2023(Proi): ', result]
    }
    else if(String(data_keys[0]).includes('Date Tooltip')){
        const result = data_values[data_values.length - 1]["0"]
        return ['Current: ', result]
    }
    else if(String(data_keys[0]).includes('Min. 2022 Net Revenue')){
        const result = data_values[0]["0"]
        return ['2022: ', result]
    }
    else if(String(data_keys[0]).includes('Baseline Tooltip')){
        const result = data_values[2]["0"]
        return ['Baseline:  ', result]
    }
    else if(String(data_keys[1]).includes('Date Tooltip')){
        const result = data_values[2]["0"]
        return ['Previous Month:  ', result]
    }
}



  