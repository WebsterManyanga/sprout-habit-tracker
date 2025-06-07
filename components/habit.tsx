import styles from "./habit.module.css";

export default function Habit() {
  return (
    <>
      <div className=" uppercase border-r border-b border-[#DDD] text-[8px] pt-3.5">
        Exercise Every Morning
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
      <div
        className={`${styles.gridDot} border-b border-[#DDD] flex justify-center items-center`}
      >
        <button className="w-[23px] h-[23px] bg-[#4ADE80] rounded-full pt-3.5 "></button>
      </div>
    </>
  );
}
