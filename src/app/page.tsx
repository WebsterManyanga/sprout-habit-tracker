import Link from "next/link";
import styles from "./app.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <main className={`${styles.landing} ${roboto.className}`}>
      <Link
        href="/login"
        className="absolute top-4 right-4 bg-[#ff3347d7] w-[80px]  hover:bg-[#FF3347] font-medium p-3.5 rounded-xl text-center transition"
      >
        Login
      </Link>{" "}
      <div className="flex flex-col justify-center items-center h-[80%] mx-auto my-auto">
        <h2 className=" text-2xl font-medium ">
          Grow Better Habits. Watch Your Plant—and Yourself—Thrive.
        </h2>
        <h1 className={`text-9xl font-medium ${styles.heading}`}>
          Sprout Habit Tracker{" "}
        </h1>
        <Link
          href="/signup"
          className=" bg-[#ff3347d7] w-[250px]  hover:bg-[#FF3347] font-medium p-3.5 rounded-xl text-center transition "
        >
          Get Started
        </Link>
      </div>
      <h2 className="text-2xl font-medium block w-full text-center">
        Every habit you complete helps your plant grow. Miss a day? It wilts.
        Stay consistent, and watch it bloom.
      </h2>
    </main>
  );
}
