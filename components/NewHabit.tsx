"use client";

import { useRef } from "react";
import habits from "@/data/habits";
import { useState } from "react";

export default function NewHabit({
  handleShowOverlay,
}: {
  handleShowOverlay: () => void;
}) {
  const [goalsButton, setGoalsButton] = useState(true);

  const handleAddGoal = () => {
    const goal = goalRef.current?.value || "";
    if (goal) {
      const habit = {
        id: (habits.length + 1).toString(),
        habitName: goal,
        description: "",
        createdAt: new Date().toISOString().split("T")[0],
        completion: [],
      };
      habits.push(habit);
      handleShowOverlay();
    }
  };

  const goalRef = useRef<HTMLInputElement>(null);
  const renderedComponent = (
    <div className="absolute top-1/3 rounded-2xl p-8 left-1/3 flex flex-col gap-4 bg-[#D9D9D9]  text-[#222529]">
      <button onClick={handleShowOverlay} className="absolute top-2 right-8">
        Close
      </button>
      <div className="flex flex-col gap-2">
        <label htmlFor="HabitName" className="uppercase text-xs">
          Habit Name
        </label>
        <input
          className=" bg-white w-96 py-2 pl-2 rounded "
          type="text"
          id="HabitName"
          placeholder="Run 5km every day"
          ref={goalRef}
        />
      </div>

      <button
        onClick={handleAddGoal}
        className="uppercase rounded-3xl py-3 w-44 mx-auto  bg-[#FF3347] text-sm font-bold text-white"
      >
        Add Goal
      </button>
    </div>
  );

  return goalsButton && renderedComponent;
}
