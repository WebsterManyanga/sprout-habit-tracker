import { HabitType } from "../../types";

const habits: HabitType[] = [
  {
    id: "001",
    habitName: "Morning Jog",
    description: "Jog for at least 20 minutes",
    createdAt: "2025-06-01",
    completion: [
      { date: "2025-06-04", status: "complete" },
      { date: "2025-06-05", status: "rejected" },
      { date: "2025-06-06", status: "complete" },
    ],
  },
  {
    id: "002",
    habitName: "Read a Book",
    description: "Read 10 pages of any book",
    createdAt: "2025-06-01",
    completion: [
      { date: "2025-06-04", status: "complete" },
      { date: "2025-06-05", status: "complete" },
      { date: "2025-06-06", status: "pending" },
    ],
  },
  {
    id: "003",
    habitName: "Code for 1 Hour",
    description: "Spend at least one hour coding or learning to code",
    createdAt: "2025-06-02",
    completion: [
      { date: "2025-06-04", status: "complete" },
      { date: "2025-06-05", status: "complete" },
      { date: "2025-06-06", status: "complete" },
    ],
  },
  {
    id: "004",
    habitName: "Drink 2L of Water",
    description: "Stay hydrated by drinking enough water",
    createdAt: "2025-06-01",
    completion: [
      { date: "2025-06-04", status: "rejected" },
      { date: "2025-06-05", status: "complete" },
      { date: "2025-06-06", status: "complete" },
    ],
  },
  {
    id: "005",
    habitName: "Stretch for 10 Minutes",
    description: "Improve flexibility and posture",
    createdAt: "2025-06-03",
    completion: [
      { date: "2025-06-04", status: "complete" },
      { date: "2025-06-05", status: "rejected" },
      { date: "2025-06-06", status: "pending" },
    ],
  },
  {
    id: "006",
    habitName: "Plan the Day",
    description: "Write a to-do list or schedule each morning",
    createdAt: "2025-06-01",
    completion: [
      { date: "2025-06-04", status: "complete" },
      { date: "2025-06-05", status: "complete" },
      { date: "2025-06-06", status: "complete" },
    ],
  },
  {
    id: "007",
    habitName: "No Social Media After 9PM",
    description: "Avoid screen time and wind down for bed",
    createdAt: "2025-06-01",
    completion: [
      { date: "2025-06-04", status: "rejected" },
      { date: "2025-06-05", status: "rejected" },
      { date: "2025-06-06", status: "complete" },
    ],
  },
];

export default habits;
