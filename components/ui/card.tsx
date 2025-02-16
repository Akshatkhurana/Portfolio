"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./dCard";
import reactLogo from "@/public/react.png";
import { div } from "motion/react-client";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col items-center w-full relative">
  {/* Title */}
  <h1 className="text-center font-bold text-3xl text-gray-800 dark:text-white mt-10">
    My Tech Stack
  </h1>

  {/* Parent Container for Cards */}
  <div className="grid grid-cols-4 gap-6 mt-6">
    {/* Card 1 */}
    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    {/* Repeat for Cards 2-8 */}
    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>

    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
    <div className="w-full flex justify-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
          border-black/[0.1] w-[18rem] h-[14rem] rounded-xl p-3 border flex flex-col items-start ml-5">
          <CardItem translateZ="60" className="w-50 h-50 mt-2">
            <Image
              src={reactLogo}
              height={200}
              width={200}
              className="w-full h-full object-contain rounded-xl group-hover/card:shadow-xl"
              alt="React Logo"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  </div>
</div>
  );
}
