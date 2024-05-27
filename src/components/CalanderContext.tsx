import React, { ReactNode, useState } from "react"

interface CalanderProviderValue {
    selectedDate:Date,
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>,
}

interface CalanderProviderProps {
    children: ReactNode
}

export const CalanderContext = React.createContext<CalanderProviderValue | null>(null);
export type {CalanderProviderValue};

export const CalanderProvider = ({children}: CalanderProviderProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <CalanderContext.Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </CalanderContext.Provider>
    )
};