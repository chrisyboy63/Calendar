import React, { useContext } from 'react';
import './DayItem.css'
import { CalanderContext, CalanderProviderValue } from './CalanderContext';
import { calcDate } from '../utils';

interface DayItemProps {
    IsBlank: boolean;
    DayNumber?: number;
    SelectedDay?: number;
    HandleDateChanged?: (newDay?: number) => void;
}

export const DayItem = React.memo((props: DayItemProps) => {
    const {
        IsBlank,
        DayNumber,
        SelectedDay,
    } = props
    
    const {selectedDate, setSelectedDate} = useContext(CalanderContext) as CalanderProviderValue;
    const cDate = calcDate(selectedDate);

    return (
        <div key={DayNumber} className="col day-item" onClick={() => setSelectedDate(new Date(cDate.Year, cDate.Month, DayNumber))}><span className={`${SelectedDay && DayNumber && SelectedDay === DayNumber && "badge rounded-pill text-bg-primary"}`}>{IsBlank && DayNumber}</span></div>
    )
});