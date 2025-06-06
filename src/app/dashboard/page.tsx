import Image from "next/image";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import styles from "./dashboard.module.css";
import Habit from "../../../components/habit";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Dashboard() {
  const checkboxes = Array(365).fill(
    <div className="w-full h-full bg-[#4ADE80] "></div>
  );
  return (
    <div className={`${inter.className} h-screen w-screen bg-[#99B3AA]`}>
      <div className="flex justify-between w-full pt-3.5 pr-3.5">
        <Image
          src={"/profile.svg"}
          alt="profile photo"
          width={69}
          height={69}
          className="w-16 h-16 rounded-full border-2 border-white shadow-md"
        />
        <div>
          <button className=" uppercase rounded-3xl py-3 px-10 bg-[#FF3347] text-sm font-bold">
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

          <ul className=" grid grid-cols-[200px_repeat(7,70px)] gap-2 ">
            <li className=" uppercase text-sm border-b border-[#DDD]">
              Habits
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Sun</h1>
              <h2>01</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Mon</h1>
              <h2>02</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Tue</h1>
              <h2>03</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Wed</h1>
              <h2>04</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Thu</h1>
              <h2>05</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Fri</h1>
              <h2>06</h2>
            </li>
            <li className=" uppercase text-sm text-[#222] border-b border-[#DDD] flex flex-col items-center">
              <h1>Sat</h1>
              <h2>07</h2>
            </li>
          </ul>
          <ul className="grid grid-cols-[200px_repeat(7,70px)] gap-2">
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
          </ul>
          <div>Streak Grid</div>
          <div className={`${styles.streakGrid} p-8 justify-center`}>
            {checkboxes.map((checkbox, i) => (
              <div className="w-full h-full bg-[#4ADE80]" key={i}></div>
            ))}
          </div>
        </div>
        <Image
          className=" w-[60%]"
          src="/plant.png"
          alt="Plant"
          width={160}
          height={200}
        />
      </div>
    </div>
  );
}
