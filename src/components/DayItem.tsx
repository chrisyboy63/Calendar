import React, { useContext } from 'react';
import './DayItem.css'

interface DayItemProps {
    IsNotBlank: boolean;
    DayNumber?: number;
    IsSelected?: boolean;
    HandleDateChanged?: (newDay?: number) => void;
}

export const DayItem = React.memo((props: DayItemProps) => {
    const {
        IsNotBlank,
        DayNumber,
        IsSelected,
        HandleDateChanged
    } = props
    

    return (
        <div key={DayNumber} className={`col day-item ${!IsNotBlank && 'day-item-blank'}`} onClick={() => IsNotBlank && HandleDateChanged && HandleDateChanged(DayNumber)}><span className={`${ IsSelected && "badge rounded-pill text-bg-primary"}`}>{IsNotBlank && DayNumber}</span></div>
    )
});