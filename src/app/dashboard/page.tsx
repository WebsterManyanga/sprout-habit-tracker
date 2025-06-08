"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import styles from "./dashboard.module.css";
import habits from "@/data/habits";
import Habit from "../../../components/habit";

import NewHabit from "../../../components/NewHabit";
import { useState } from "react";
import CellBox from "../../../components/CellBox";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Dashboard() {
  const dateRange = [
    "2025-06-01",
    "2025-06-02",
    "2025-06-03",
    "2025-06-04",
    "2025-06-05",
    "2025-06-06",
    "2025-06-07",
  ];
  const [overlayVisible, setOverlayVisible] = useState(false);

  const checkboxes = Array(365).fill(
    <div className="w-full h-full bg-[#4ADE80] "></div>
  );

  const handleShowOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div className={`${inter.className} h-screen w-screen bg-[#99B3AA]`}>
      {overlayVisible && <NewHabit handleShowOverlay={handleShowOverlay} />}
      <div className="flex justify-between w-full pt-3.5 pr-3.5">
        <Image
          src={"/profile.svg"}
          alt="profile photo"
          width={69}
          height={69}
          className="w-16 h-16 rounded-full border-2 border-white shadow-md"
        />
        <div>
          <button
            onClick={handleShowOverlay}
            className=" uppercase rounded-3xl py-3 px-10 bg-[#FF3347] text-sm font-bold"
          >
            New Habit
          </button>
        </div>
      </div>
      <div className={`${styles.homeGrid} ${nunito.className} `}>
        <div className="bg-white w-min ml-28 text-[#111] px-10 rounded-sm">
          <div className="  w-full flex justify-end p-3.5 ">
            <button className="text-xs uppercase border border-[#CFCFCF] rounded-sm p-3.5">
              01 January 2023 - 07 January 2023
            </button>
          </div>

          <ul className=" grid grid-cols-[200px_repeat(7,70px)] ">
            <li className=" uppercase text-sm border-b  border-[#DDD]">
              Habits
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Sun</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Mon</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Tue</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Wed</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Thu</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Fri</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Sat</h1>
            </li>
            <li className="border-r border-[#DDD]"></li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              01
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              02
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              03
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              04
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              05
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              06
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              07
            </li>
          </ul>
          <ul className="grid grid-cols-[200px_repeat(7,70px)] grid-rows-[repeat(7,35px)] ]">
            {habits.map((habit) => (
              <Habit habit={habit} key={habit.id} dateRange={dateRange} />
            ))}
          </ul>
          <div className={`${styles.streakGrid} pt-8 pb-1 justify-center`}>
            {checkboxes.map((checkbox, i) => (
              <CellBox key={i} day={i} />
            ))}
          </div>
        </div>
        <Image
          className=" w-[30%] self-center mx-auto"
          src="/plant.png"
          alt="Plant"
          width={160}
          height={200}
        />
      </div>
    </div>
  );
}
