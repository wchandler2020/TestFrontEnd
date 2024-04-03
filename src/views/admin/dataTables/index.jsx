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
import { Box } from "@chakra-ui/react";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";

import React from "react";
import '../../../interceptors/axios'
import Card from "components/card/Card";

export default function MeetTheTeam() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet The Jorie Team
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            At Jorie, our company motto is 'Go JT,' which stands for 'Go Jorie
            Team.' It embodies our core philosophy of unity and collaboration.
            We believe in working together tirelessly to achieve our common
            goals, always moving forward as a cohesive team. With 'Go JT,' we
            are committed to delivering excellence through teamwork and
            unwavering determination.
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Bonnie Green</a>
            </h3>
            <p>CEO/Co-founder</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              alt="Helene Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Helene Engels</a>
            </h3>
            <p>CTO/Co-founder</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Jese Leos</a>
            </h3>
            <p>SEO & Marketing</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="Joseph Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Joseph Mcfall</a>
            </h3>
            <p>Sales</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
              alt="Sofia Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Lana Byrd</a>
            </h3>
            <p>Web Designer</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
              alt="Leslie Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Leslie Livingston</a>
            </h3>
            <p>Graphic Designer</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
          <Card>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="Michael Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Michael Gough</a>
            </h3>
            <p>React Developer</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
          </Card>
         <Card>
         <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
              alt="Neil Avatar"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Neil Sims</a>
            </h3>
            <p>Vue.js Developer</p>
            <ul class="flex justify-center mt-4 space-x-4">
              <li>
                <a
                  href="#"
                  class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineEmail color="#2988bc" size="24px"/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                >
                  <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                </a>
              </li>
            </ul>
          </div>
         </Card>
          
        </div>
      </div>
    </Box>
  );
}
