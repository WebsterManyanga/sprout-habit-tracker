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
import { DayPicker } from "react-day-picker";
import { useRef } from "react";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Dashboard() {
  const dateRange: string[] = [];
  const dateRangeDates: Date[] = [];
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date("2025-01-01"));
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const calendarOverlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarOverlayRef.current &&
        !calendarOverlayRef.current.contains(event.target as Node)
      ) {
        setDatePickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const endDate = new Date(selectedDay);
  endDate.setDate(endDate.getDate() + 6);

  const checkboxes = Array(365).fill(
    <div className="w-full h-full bg-[#4ADE80] "></div>
  );

  const handleShowOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  for (let i = 0; i < 7; i++) {
    const dateToAdd = new Date(selectedDay);
    dateToAdd.setDate(dateToAdd.getDate() + i);
    dateRangeDates[i] = dateToAdd;
    dateRange[i] = dateToAdd.toISOString().split("T")[0];
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // console.log(days[dateRangeDates[6].getDate()]);
  // console.log(dateRangeDates[0].getDay());

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
          <div className="  w-full flex justify-end p-3.5 relative">
            <button
              onClick={() => setDatePickerVisible(true)}
              className="text-xs uppercase border border-[#CFCFCF] rounded-sm p-3.5"
            >
              {selectedDay.toLocaleDateString()} -{" "}
              {endDate.toLocaleDateString()}
            </button>
            {datePickerVisible && (
              <div ref={calendarOverlayRef}>
                <DayPicker
                  className="absolute top-16 right-0 bg-amber-100 "
                  animate
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  footer={
                    selectedDay
                      ? `Selected day: ${selectedDay?.toLocaleDateString()}`
                      : "Please select a day"
                  }
                />
              </div>
            )}
          </div>

          <ul className=" grid grid-cols-[200px_repeat(7,70px)] ">
            <li className=" uppercase text-sm border-b  border-[#DDD]">
              Habits
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[0].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[1].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[2].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[3].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[4].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[5].getDay()]}</h1>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>{days[dateRangeDates[6].getDay()]}</h1>
            </li>
            <li className="border-r border-[#DDD]"></li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[0].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[1].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[2].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[3].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[4].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[5].getDate()}
            </li>
            <li className=" uppercase text-sm text-[#222] flex flex-col items-center">
              {dateRangeDates[6].getDate()}
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
