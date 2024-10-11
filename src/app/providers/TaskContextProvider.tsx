import React, { createContext, useContext} from 'react'

interface TaskItem {
    Task: string[];
    setTask: React.Dispatch<React.SetStateAction<string[]>>;
}