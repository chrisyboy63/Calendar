import React from 'react';
import './DayItem.css'

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
        HandleDateChanged
    } = props
    return (
        <div key={DayNumber} className="col day-item" onClick={() => HandleDateChanged && HandleDateChanged(DayNumber)}><span className={`${SelectedDay && DayNumber && SelectedDay === DayNumber && "badge rounded-pill text-bg-primary"}`}>{IsBlank && DayNumber}</span></div>
    )
});