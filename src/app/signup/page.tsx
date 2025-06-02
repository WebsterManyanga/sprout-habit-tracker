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
    <main className={`${styles.main} h-screen text-white flex flex-col justify-center items-center`}>
      <div className="flex flex-col justify-center">
        <header className={`${roboto.className} bg-[#FF3347CC] rounded-t-2xl p-8 w-[700px]`}>
          <h1 className=" text-5xl font-medium">Welcome to Sprout</h1>
          <h2 className=" text-lg font-medium">
            Plant the seed of consistency. Grow something amazing—starting
            today.
          </h2>
        </header>
        <div className={`${inter.className} bg-[#FF3347CC] rounded-b-2xl p-8 w-[700px]`}>
          
        </div>
      </div>
    </main>
  );
}
