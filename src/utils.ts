function EnumToArray<Enum extends object>(enumToChange: Enum): Array<keyof Enum> {
    return (Object.keys(enumToChange) as Array<keyof typeof enumToChange>);
}

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

const MonthsAsArray: Array<string> = EnumToArray(Months);
const DaysAsArray: Array<string> = EnumToArray(DaysOfTheWeek);

interface CalcDate {
    Day: number,
    Month: number,
    Year: number,
    DayName: string,
    MonthName: string
}

const calcDate = (d: Date) => {
    const result: CalcDate = {
        Day: d.getDate(),
        Month: d.getMonth(),
        Year: d.getFullYear(),
        DayName: DaysAsArray[d.getDay()],
        MonthName: MonthsAsArray[d.getMonth()]
    };

    return result;
}

export { EnumToArray, getTextDate, DaysOfTheWeek, Months, DaysAsArray, MonthsAsArray, calcDate };