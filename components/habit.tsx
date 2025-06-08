import { HabitType } from "../types";
import CheckButton from "./CheckButton";
import styles from "./habit.module.css";
import habits from "@/data/habits";

type Status = "pending" | "complete" | "rejected";

export default function Habit({
  habit,
  dateRange,
}: {
  habit: HabitType;
  dateRange: string[];
}) {
  const { id, habitName: habitName, completion } = habit;


  const completeStyle = {
    backgroundColor: "#4ADE80",
  };
  const rejectedStyle = {
    backgroundColor: "#EF4444",
  };

  const pendingStyle = {
    backgroundColor: "#D1D5DB",
  };
  const recordStyles = [pendingStyle, completeStyle, rejectedStyle];
  let recordStyle = recordStyles[0];

  const completedRange = dateRange.map((date) => {
    let status: Status = "pending";
    const dateIndex = completion.findIndex((day) => {
      if (day.date === date) {
        status = day.status as Status;
        return true;
      }
      return false;
    });

    if (status === "pending") {
      recordStyle = recordStyles[0];
    } else if (status === "complete") {
      recordStyle = recordStyles[1];
    } else {
      recordStyle = recordStyles[2];
    }

    return (
      <div
        key={date}
        className={`${styles.gridDot}  border-b border-[#DDD] flex justify-center items-center`}
      >
        <CheckButton habit={habit} dateIndex={dateIndex}/>
      </div>
    );
  });

  return (
    <>
      <div className=" uppercase border-r border-b border-[#DDD] text-[8px] pt-3.5">
        {habitName}
      </div>
      {completedRange}
    </>
  );
}
