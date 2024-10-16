import React, { createContext, useContext } from "react";

interface TaskItem {
  task: string[];
  setTask: React.Dispatch<React.SetStateAction<string[]>>;
  deleteTask: (index: number) => void;
}