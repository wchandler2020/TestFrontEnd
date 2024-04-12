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
  const [tableauData, setTableauData] = useState(null);

  
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
              console.log(tabItem)
              const tabName = Object.keys(tabItem[0])
              const tabValue = Object.values(tabItem[0])
              const dataList = [tabName[1], tabValue[2]['0']]
              const tabName2 = Object.keys(tabItem[1])
              const tabValue2 = Object.values(tabItem[1])
              const dataList2 = [tabName2[0], tabValue2[1]["0"]]
              const tabName3 = Object.keys(tabItem[2])
              const tabValue3 = Object.values(tabItem[2])
              console.log('TIPPY: ', tabValue3)
              const dataList3 = [tabName3[0], tabValue3[1]["0"]]
              
              // const negVal = Object.values(tabItem['item_1'])[1]['0']
              return (
                <MiniStatistics
                keys={i}
                startContent={
                  <IconBox
                    w='56px'
                    h='56px'
                    bg={boxBg}
                    // icon={
                    //   <Icon w='32px' h='32px' as={negVal==='Negative' ? MdArrowDownward : MdArrowUpward} color={negVal === 'Negative' ? '#f70025': '#5C8F22'} />
                    // }
                  />
                }
                name={formatClientData(dataList)[0]}
                value={formatClientData(dataList)[1]}
                name2={formatClientData(dataList2[0])}
                value2={formatClientData(dataList2[1])}
                name3={formatClientData(dataList3)[0]}
                // value3={formatClientData(tabItem['item_3'])[1]}
              />
            )}
            )
          }      
      </SimpleGrid>
      {/* code goes here */}
    </Box>
  );
}


