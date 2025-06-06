import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Dashboard() {
  return (
    <div className={`${inter.className} h-screen w-screen`}>
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
      <div className="bg-white w-[50%] ml-28 text-black ">
        <div>Calendar</div>
        <div className="grid grid-cols-2 grid-rows-12">
            
        </div>
        <div>Streak Grid</div>
      </div>
    </div>
  );
}
