import { DaysOfTheWeek, EnumToArray } from "../utils";
import { Month } from "./Month";
import { CalanderProvider } from "./CalanderContext";
import './Calander.css';
import { CalanderHeader } from "./CalanderHeader";

interface CalanderProps {
    SelectedDate: Date
}

const Calander = ({SelectedDate}: CalanderProps) => {
    
    return (
        <CalanderProvider>
            <div className="container">
                <div className="row mb-4">
                    <CalanderHeader />
                </div>
                <div className="row mb-4 weekday-header">
                    {(EnumToArray(DaysOfTheWeek)).map((day, i) => (
                        <div key={i} className="col">
                            <b>{day}</b>
                        </div>
                    ))}
                </div>
                <Month />
            </div>
        </CalanderProvider>
    )

}

export default Calander;