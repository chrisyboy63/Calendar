import { useCallback, useContext, useReducer } from "react";
import { CalanderContext, CalanderProviderValue } from "./CalanderContext";
import { DayItem } from "./DayItem";
import './Month.css'


export const Month = () => {
    const {selectedDate, setSelectedDate} = useContext(CalanderContext) as CalanderProviderValue;
    const selectedDay = selectedDate.getDate(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear();
    const startOfMonth = new Date(selectedYear, selectedMonth, 1);

    const handleDateChangeCallback = useCallback((dayNum: number | undefined) => {
        setSelectedDate(new Date(selectedYear, selectedMonth, dayNum));
    }, []);

    function renderMonth() {
        const rows = [];
        const maxNumberOfDays = (new Date(selectedYear, selectedMonth + 1, 0)).getDate();
        let dayCounter = 1;

        while (dayCounter <= maxNumberOfDays) {

            let numberOfDaysInWeek = 7 - startOfMonth.getDay();
            let startBlanks = 7 - numberOfDaysInWeek;
            const startWeekNumber = dayCounter;

            const weekRow = (
                <div key={rows.length} className="row week-item">
                    {[...Array(startBlanks)].map((o, i) => <DayItem key={`blank-${0 - i}`} IsNotBlank={false} />)}
                    {[...Array(numberOfDaysInWeek)].map((o, i) => {
                        let weekDayNum = startWeekNumber + i;
                        const dayItem = (
                            <DayItem key={`day-${weekDayNum}`} HandleDateChanged={handleDateChangeCallback} DayNumber={weekDayNum} IsSelected={selectedDay === weekDayNum} IsNotBlank={(weekDayNum <= maxNumberOfDays)} />
                        )
                        return dayItem;
                    })
                    }
                </div>
            )

            dayCounter += numberOfDaysInWeek;
            startOfMonth.setDate(startOfMonth.getDate() + numberOfDaysInWeek);
            rows.push(weekRow);
        }

        return rows;
    }

    console.log(`Rendering Days`)

    return (
    <>
       {renderMonth()} 
    </>
    );
}