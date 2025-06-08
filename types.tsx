export interface HabitType {
  id: string;
  habitName: string;
  description: string;
  createdAt: string;
  completion: { date: string; status: "pending" | "complete" | "rejected" }[];
}
