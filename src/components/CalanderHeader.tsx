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
                        <span className="display-6 m-0">{getTextDate(cDate.Day)} {cDate.MonthName} {cDate.Year}</span>
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