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
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, {useEffect, useState} from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdArrowUpward,
  MdArrowDownward
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import ArBuckets from "views/admin/default/components/ArBuckets";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import axios from "axios";
import { formatClientData } from "client_utility";
import { typeOf } from "react-is";
import '../../../interceptors/axios'
import PayerMixChart from "components/charts/PayerMixChart";
import PayerMix from "./components/PayerMix";
import MonthlyCost from "./components/MonthlyCost";
import ClaimVolumes from "./components/ClaimVolumes";



export default function UserReports() {
  const regexPattern = /^[a-zA-Z0-9,.-]+$/;
  const [loading, setLoading] = useState(true)
  const [tableauData, setTableauData] = useState([]);
  const [barchartData, setBarchartData] = useState([]);
  const [xaxisData, setXaxisData] = useState([]);
  const [yaxisData, setYaxisData] = useState([]);
  const [payerMixData, setPayerMixData] = useState(null);
  const [monthCostData, setMonthlyCostData] = useState(null);
  const [claimVolumeData, setClaimVolumeData] = useState(null);
  


const url = "https://wchandler60610.pythonanywhere.com/api/tableau-data/";
const values = [];

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
        const jsonString = JSON.stringify(data.ortho_one_data);
        const retrievedData = JSON.parse(jsonString);
        const mixPayereResponseData = JSON.parse(data['chart_data_results'][1]);  
        const monthCostResponseeData = JSON.parse(data['chart_data_results'][2]);
        const volumeData = JSON.parse(data['chart_data_results'][3]);
        setPayerMixData(mixPayereResponseData)
        setTableauData(retrievedData);
        setMonthlyCostData(monthCostResponseeData)
        setClaimVolumeData(volumeData)

        console.log('DATA: ', volumeData)
        setLoading(false)
        // setBarchartData(responseData);
        // setXaxisData(Object.values(responseData['Measure Names']));
        // setYaxisData(Object.values(responseData['Measure Values']));
      } catch (e) {
        console.log(e);
      }
    })();
  }
}, []);
console.log('THIS IS GETTING CLOSER: ', claimVolumeData)

  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  if(loading) return <p>Loading...</p>
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'>
          {
            tableauData.map((tabItem, i) => (
                <MiniStatistics
                keys={i}
                startContent={
                  <IconBox
                    w='56px'
                    h='56px'
                    bg={boxBg}
                    icon={
                      <Icon w='32px' h='32px' as={tabItem['item_1'].includes('-') ? MdArrowDownward : MdArrowUpward} color={tabItem['item_1'].includes('-') ? '#CB0000' : '#5C8F22'} />
                    }
                  />
                }
                
                // name={formatClientData('Orth One', Object.values(tabItem['item_1']).toString().replace(/[^a-zA-Z0-9,.-]/g, ''))[0]}
                // value={`${formatClientData('Orth One', Object.values(tabItem['item_1']) .toString().replace(/[^a-zA-Z0-9,.-]/g, ''))[1]}`}
                name={formatClientData('Orth One', tabItem['item_1'])[0]}
                value={formatClientData('Orth One', tabItem['item_1'])[1]}
                name2={formatClientData('Orth One',tabItem['item_2'])[0]}
                value2={formatClientData('Orth One',tabItem['item_2'])[1]}
                name3={formatClientData('Orth One',tabItem['item_3'])[0]}
                value3={formatClientData('Orth One',tabItem['item_3'])[1]}
              />
              
            ))
          }      
        {/* <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name='Spend this month'
          value='$642.39'
        /> */}
        {/* <MiniStatistics growth='+23%' name='Sales' value='$574.34' /> */}
        {/* <MiniStatistics
          endContent={
            <Flex me='-16px' mt='10px'>
              <FormLabel htmlFor='balance'>
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id='balance'
                variant='mini'
                mt='5px'
                me='0px'
                defaultValue='usd'>
                <option value='usd'>USD</option>
                <option value='eur'>EUR</option>
                <option value='gba'>GBA</option>
              </Select>
            </Flex>
          }
          name='Your balance'
          value='$1,000'
        /> */}
        {/* <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='New Tasks'
          value='154'
        /> */}
        {/* <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name='Total Projects'
          value='2935'
        /> */}
      </SimpleGrid>
    

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* Conditionally render MonthlyCost component */}
        {monthCostData && <MonthlyCost chartData={monthCostData} />}
        {/* Conditionally render PayerMix component */}
        {payerMixData && <PayerMix chartData={payerMixData} />}
        {/* <ArBuckets  
          columnsData={xaxisData}
          tableData={yaxisData}
        /> */}
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        {/* Conditionally render MonthlyCost component */}
        {monthCostData && <ClaimVolumes chartData={claimVolumeData}/>}
        {/* Conditionally render PayerMix component */}
        {/* {payerMixData && <PayerMix chartData={payerMixData} />} */}
        {/* <ArBuckets  
          columnsData={xaxisData}
          tableData={yaxisData}
        /> */}
        {/* <WeeklyRevenue /> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          {/* <PieCard /> */}
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          {/* <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} /> */}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}


