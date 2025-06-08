"use client";

import habits from "@/data/habits";
import { HabitType } from "../types";
import { use } from "react";
import { useState } from "react";

export default function CheckButton({
  habit,
  dateIndex,
}: {
  habit: HabitType;
  dateIndex: number;
}) {
  const { id } = habit;
  const [status, setStatus] = useState(
    habit.completion[dateIndex]?.status || "pending"
  );
  const handleButtonClick = (habitId: string, dateIndex: number) => {
    const i = habits.findIndex((habit) => habit.id === habitId);
    if (status === "pending") {
      setStatus("complete");
    } else if (status === "complete") {
      setStatus("rejected");
    } else {
      setStatus("pending");
    }
  };

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
  if (status === "pending") {
    recordStyle = recordStyles[0];
  } else if (status === "complete") {
    recordStyle = recordStyles[1];
  } else {
    recordStyle = recordStyles[2];
  }
  return (
    <button
      className={`w-[23px] h-[23px]  rounded-full pt-3.5 `}
      style={recordStyle}
      onClick={() => {
        handleButtonClick(id, dateIndex);
      }}
    ></button>
  );
}
