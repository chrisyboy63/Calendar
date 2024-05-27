import { useContext } from "react";
import { CalanderContext, CalanderProviderValue } from "./CalanderContext";
import { DayItem } from "./DayItem";
import './Month.css'

export const Month = () => {
    const {selectedDate} = useContext(CalanderContext) as CalanderProviderValue;
    const selectedDay = selectedDate.getDate(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear();
    const startOfMonth = new Date(selectedYear, selectedMonth, 1);

    function renderMonth() {
        const rows = [];
        const maxNumberOfDays = (new Date(selectedYear, selectedMonth + 1, 0)).getDate();
        let dayCounter = 1;

        while (dayCounter <= maxNumberOfDays) {

            let numberOfDaysInWeek = 7 - startOfMonth.getDay();
            let startBlanks = 7 - numberOfDaysInWeek;
            const startWeekNumber = dayCounter;

            const weekRow = (
                <div key={rows.length} className="row  week-item">
                    {[...Array(startBlanks)].map((o, i) => <DayItem key={0 - i} IsBlank={true} />)}
                    {[...Array(numberOfDaysInWeek)].map((o, i) => {
                        let weekDayNum = startWeekNumber + i;
                        const dayItem = (
                            <DayItem key={weekDayNum} DayNumber={weekDayNum} SelectedDay={selectedDay} IsBlank={(weekDayNum <= maxNumberOfDays)} />
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

    return (
    <>
        {renderMonth()}
    </>
    );
}