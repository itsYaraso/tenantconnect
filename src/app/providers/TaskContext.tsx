import { UUID } from "crypto";
import React, { createContext, useContext } from "react";
import { PropertyContextProvider } from "./PropertyContext";
import { TenantContextProvider } from "./TenantContext";

interface TaskItem {
  id: UUID;
  task: string[];
  setTask: React.Dispatch<React.SetStateAction<string[]>>;
  deleteTask: (index: number) => void;
}

const TaskContext = createContext({} as TaskItem);

export const useTaskContext = () => useContext(TaskContext);

export function TaskContextProvider(props: React.PropsWithChildren) {
  const value = {};

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}
