import Image from "next/image";
import styles from "./signup.module.css";
import { Roboto, Inter } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Signup() {
  return (
    <main
      className={`${styles.main} h-screen  w-screen bg-center bg-contain text-black flex items-center justify-center`}
    >
      <div className="flex flex-col justify-center bg-[#f6f6f6] border border-[#C2C2C2] h-min rounded-2xl w-8/12">
        <header
          className={`${roboto.className} bg-[#FF3347CC] text-white rounded-t-2xl p-8 `}
        >
          <h1 className=" text-5xl font-medium">Welcome to Sprout</h1>
          <h2 className=" text-lg font-medium">
            Plant the seed of consistency. Grow something amazing—starting
            today.
          </h2>
        </header>
        <div className={`${inter.className} rounded-b-2xl p-8 box-border`}>
          <form action="/dashboard" className="flex justify-between">
            <div className="flex flex-col gap-4 w-[70%] ">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-xs uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Peter Parker"
                  className="border  border-[#C2C2C2] rounded-md p-3  w-2/3 bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="PeterParker@marvel.com"
                  className="border  border-[#C2C2C2] rounded-md p-3  w-2/3 bg-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border  border-[#C2C2C2] rounded-md p-3  w-2/3 bg-white"
                />
              </div>
              <button
                type="submit"
                className=" text-white bg-[#FF3347] rounded-lg  p-2 font-bold w-28"
              >
                Sign Up
              </button>
            </div>
            <div
              className={`${roboto.className} font-bold  w-[30%] gap-2 flex flex-col items-center`}
            >
              <h1>Pick a plant</h1>
              <div className="flex ">
                <button>Previous</button>
                <Image src="/plant.png" alt="Plant" width={160} height={200} />
                <button>Next</button>
              </div>
              <h1>Palm Tree</h1>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
