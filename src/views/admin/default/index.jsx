/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, {useEffect, useState} from "react";
import {
  MdArrowUpward,
  MdArrowDownward
} from "react-icons/md";
import ArBuckets from "views/admin/default/components/ArBuckets";
import axios from "axios";
import { formatClientData } from "client_utility";
import '../../../interceptors/axios'
import PayerMix from "./components/PayerMix";
import NetCollection from "./components/NetCollection";
import ClaimVolumes from "./components/ClaimVolumes";
import '../../../interceptors/axios'
import Loading from "../loading/Loading";
import RevenueOutcome from "./components/RevenueOutcomes";

export default function UserReports() {
  const [loading, setLoading] = useState(true)
  const [tableauData, setTableauData] = useState([]);
  const [barchartData, setBarchartData] = useState([]);
  const [comparisonData, setComparisonData] = useState(null);
  const [payerMixData, setPayerMixData] = useState(null);
  const [monthCostData, setMonthlyCostData] = useState(null);
  const [claimVolumeData, setClaimVolumeData] = useState(null);
  const [netCollectionData, setNetCollectionData] = useState(null);
  const [revenueOutcomeData, setRevenueOutcomeData] = useState(null);
  
const url = "http://localhost:8000/api/tableau-data/";
// const url = "https://wchandler60610.pythonanywhere.com/api/tableau-data/";

useEffect(() => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken === null) {
    window.location.href = "/login";
  } else {
    (async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(data)
        const jsonString = JSON.stringify(data.client_data)
        const comparisoonDataStr = JSON.stringify(data.chart_data_results[0])
        const monthCostStr = JSON.stringify(data.chart_data_results[1])
        const payermixStr = JSON.stringify(data.chart_data_results[2])
        const volumeStr = JSON.stringify(data.chart_data_results[3])
        const netCollectionsStr = JSON.stringify(data.chart_data_results[4])
        const revenueOutcomeStr = JSON.stringify(data.chart_data_results[5])
        
        const mixPayereResponseData = JSON.parse(payermixStr); 
        const retrievedData = JSON.parse(jsonString);
        const monthCostResponseeData = JSON.parse(monthCostStr);
        const volumeData = JSON.parse(volumeStr);
        const comparisonData = JSON.parse(comparisoonDataStr)
        const netCollectionJSONData = JSON.parse(netCollectionsStr)
        const revenueOutcomeJSONData = JSON.parse(revenueOutcomeStr)
        setTableauData(retrievedData);
        setPayerMixData(mixPayereResponseData)
        setMonthlyCostData(monthCostResponseeData)
        setComparisonData(comparisonData)
        setClaimVolumeData(volumeData)
        setNetCollectionData(netCollectionJSONData)
        setRevenueOutcomeData(revenueOutcomeJSONData)
        setLoading(false)
        
      } catch (e) {
        console.log(e);
      }
    })();
  }
}, []);

console.log('NET COLLECTION DATA: ', netCollectionData)

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  if(loading) return <div style={{'height': '100vh', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
    <Loading /> 
  </div>
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'>
          {
            tableauData.map((tabItem, i) => {
              const negVal = Object.values(tabItem['item_1'])[1]['0']
              return (
                <MiniStatistics
                keys={i}
                startContent={
                  <IconBox
                    w='56px'
                    h='56px'
                    bg={boxBg}
                    icon={
                      <Icon w='32px' h='32px' as={negVal==='Negative' ? MdArrowDownward : MdArrowUpward} color={negVal === 'Negative' ? '#f70025': '#5C8F22'} />
                    }
                  />
                }
                name={formatClientData(tabItem['item_1'])[0]}
                value={formatClientData(tabItem['item_1'])[1]}
                name2={formatClientData(tabItem['item_2'])[0]}
                value2={formatClientData(tabItem['item_2'])[1]}
                name3={formatClientData(tabItem['item_3'])[0]}
                value3={formatClientData(tabItem['item_3'])[1]}
              />
            )}
            )
          }      
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
        {comparisonData && <ArBuckets chartData={comparisonData}/>}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* Conditionally render MonthlyCost component */}
        {claimVolumeData && <ClaimVolumes chartData={claimVolumeData}/>}
        {/* Conditionally render PayerMix component */}
        {payerMixData && <PayerMix chartData={payerMixData} />}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* Conditionally render MonthlyCost component */}
        {netCollectionData && <NetCollection chartData={netCollectionData}/>}
        {revenueOutcomeData && <RevenueOutcome chartData={revenueOutcomeData}/>}
      </SimpleGrid>
    </Box>
  );
}


