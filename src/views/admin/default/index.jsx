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
import { formatClientData, formatNumber } from "client_utility";
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
  const [comparisonData, setComparisonData] = useState([])

  
const url = "http://localhost:8000/api/tableau-data/";

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
        setTableauData(data.client_data);
        setComparisonData(data.chart_data_results[0])
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    })();
  }
}, []);



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
              const statName1 = Object.keys(tabItem[0])[1];
              
              const statValue1 = Object.values(tabItem[0])[2]['0'];
              
              const statName2 = Object.keys(tabItem[1])[0];
              const statValue2 = Object.values(tabItem[1])[1]['0'];
              console.log(statValue2)
              
              const statName3 = Object.keys(tabItem[2])[0];
              const statValue3 = Object.values(tabItem[2])[2]['0'];
              const intVal = statName1
              console.log('val: ', intVal)
              
              return (
                <MiniStatistics
                keys={i}
                startContent={
                  <IconBox
                    w='56px'
                    h='56px'
                    bg={boxBg}
                    // icon={
                    //   // <Icon w='32px' h='32px' as={negVal==='Negative' ? MdArrowDownward : MdArrowUpward} color={negVal === 'Negative' ? '#f70025': '#5C8F22'} />
                    // }
                  />
                }
                name={formatClientData(statName1)}
                value={formatNumber(statValue1)}
                name2={formatClientData(statName2)}
                value2={formatNumber(statValue2)}
                name3={formatClientData(statName3)}
                value3={formatNumber(statValue3)}
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
        {/* {claimVolumeData && <ClaimVolumes chartData={claimVolumeData}/>} */}
        {/* Conditionally render PayerMix component */}
        {/* {payerMixData && <PayerMix chartData={payerMixData} />} */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* Conditionally render MonthlyCost component */}
        {/* {netCollectionData && <NetCollection chartData={netCollectionData}/>}
        {revenueOutcomeData && <RevenueOutcome chartData={revenueOutcomeData}/>} */}
      </SimpleGrid>

    </Box>
  );
}





