import habits from "@/data/habits";
export default function CellBox({ day }: { day: number }) {
  const startDate = new Date(2025, 0, 1);
  const dateHeld = new Date(startDate);
  const collector: number[] = [];
  dateHeld.setDate(startDate.getDate() + day);
  habits.forEach((habit) => {
    const dateIndex = habit.completion.findIndex((record) => {
      return record.date === dateHeld.toISOString().split("T")[0];
    });
    console.log("dateIndex", dateIndex);

    if (habit.completion[dateIndex]?.status === "complete") {
      collector.push(1);
    } else if (habit.completion[dateIndex]?.status === "rejected") {
      collector.push(-1);
    } else {
      collector.push(0);
    }
  });

  const total = collector.reduce((acc, curr) => acc + curr, 0);
  let cell = <div className="w-full h-full bg-[#4ADE80]"></div>;
  if (total < 0) {
    cell = <div className="w-full h-full bg-[#EF4444]"></div>;
  } else if (total === 0) {
    cell = <div className="w-full h-full bg-[#D1D5DB]"></div>;
  } else if (total < habits.length) {
    cell = <div className="w-full h-full bg-[#d8f087]"></div>;
  } else {
    cell = <div className="w-full h-full bg-[#4ADE80]"></div>;
  }

  return cell;
}
