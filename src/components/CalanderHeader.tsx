import { useContext } from "react";
import { CalanderContext, CalanderProviderValue } from "./CalanderContext"
import { calcDate, getTextDate } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const CalanderHeader = () => {
    const { selectedDate, setSelectedDate } = useContext(CalanderContext) as CalanderProviderValue;
    const cDate = calcDate(selectedDate);

    const handleSetToday = () => {
        setSelectedDate(new Date());
    }

    const handleBackMonth = () => {
        setSelectedDate(new Date(cDate.Year, cDate.Month - 1, 1));
    }

    const handleForwardMonth = () => {
        setSelectedDate(new Date(cDate.Year, cDate.Month + 1, 1));
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-auto">
                        <span className="display-4">{getTextDate(cDate.Day)}</span>
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="m-0">{cDate.MonthName}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <b>{cDate.DayName}</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <b>{cDate.Year}</b>
                    </div>
                </div>
            </div>
            <div className="col text-end">
                <div className="btn-group mt-2">
                    <button onClick={handleBackMonth} className="btn btn-outline-secondary"><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button onClick={handleSetToday} className="btn btn-outline-secondary">Today</button>
                    <button onClick={handleForwardMonth} className="btn btn-outline-secondary"><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </div>
        </div>
    )
}