import { useState } from "react";
import { EnumToArray } from "../utils";
import { DayItem } from "./DayItem"
import './Calander.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
};

enum DaysOfTheWeek {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

interface CalanderProps {
    SelectedDate: Date
}

let _monthsAsArray: Array<string> = EnumToArray(Months);
let _daysAsArray: Array<string> = EnumToArray(DaysOfTheWeek);


const Calander = ({SelectedDate}: CalanderProps) => {
    const [selectedDate, setSelectedDate] = useState(SelectedDate);
    const selectedDay = selectedDate.getDate(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear();
    const startOfMonth = new Date(selectedYear, selectedMonth, 1);
    
    const getTextDate = (date: number) => {
        if (date > 10 && date < 20) {
            return date + "th";
        }

        const dateStr = date.toString()
        const lastDigit = parseInt(dateStr.substring(dateStr.length - 1, 1));

        switch (lastDigit) {
            case 1:
                return date + "st";
            case 2:
                return date + "nd";
            case 3:
                return date + "rd";
        }

        return date + "th";
    }

    const handleSetToday = () => {
        setSelectedDate(new Date());
    }

    const handleBackMonth = () => {
        setSelectedDate(new Date(selectedYear, selectedMonth - 1, 1));
    }

    const handleForwardMonth = () => {
        setSelectedDate(new Date(selectedYear, selectedMonth + 1, 1));
    }

    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-auto">
                                <span className="display-4">{getTextDate(selectedDate.getDate())}</span>
                            </div>
                            <div className="col-auto">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="m-0">{_monthsAsArray[selectedMonth]}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <b>{_daysAsArray[selectedDate.getDay()]}</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <b>{selectedYear}</b>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end">
                        <div className="btn-group mt-2">
                            <button onClick={handleBackMonth} className="btn btn-outline-secondary"><FontAwesomeIcon icon={faChevronLeft}/></button>
                            <button onClick={handleSetToday} className="btn btn-outline-secondary">Today</button>
                            <button onClick={handleForwardMonth} className="btn btn-outline-secondary"><FontAwesomeIcon icon={faChevronRight}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4 weekday-header">
                {(EnumToArray(DaysOfTheWeek)).map((day, i) => (
                    <div key={i} className="col">
                        <b>{day}</b>
                    </div>
                ))}
            </div>
            {renderMonth()}
        </div>
    )

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
                    {[...Array(startBlanks)].map((o,i) => <DayItem key={0-i} IsBlank={true} />)}
                    {[...Array(numberOfDaysInWeek)].map((o,i) => {
                        let weekDayNum = startWeekNumber + i;
                        const dayItem = (
                            <DayItem key={weekDayNum} DayNumber={weekDayNum} SelectedDay={selectedDay} HandleDateChanged={(newDay) => setSelectedDate(new Date(selectedYear, selectedMonth, newDay))} IsBlank={(weekDayNum <= maxNumberOfDays)} />
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
}

export default Calander;
export {Months}