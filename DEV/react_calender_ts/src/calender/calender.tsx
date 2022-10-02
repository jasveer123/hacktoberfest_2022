import { FC } from 'react'
import { startOfMonth, endOfMonth, differenceInDays, format, sub, add } from 'date-fns'
import './calender.css'
import Cell from './cell'

type Props = {
    value?: Date;
    onChange: (date: Date) => void;
};

const Calender: FC<Props> = ({ value = new Date(), onChange }) => {


    const startDate = startOfMonth(value);
    const endDate = endOfMonth(value);
    const numDays = differenceInDays(endDate, startDate) + 1;
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();
    const prevMonth = () => onChange(sub(value, { months: 1 }));
    const nextMonth = () => onChange(add(value, { months: 1 }));
    const prevYear = () => onChange(sub(value, { years: 1 }));
    const nextYear = () => onChange(add(value, { years: 1 }));



    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <div className='container'>

            <div className='grid-container'>
                <Cell children={"<<"} onClick={prevYear} />
                <Cell children={"<"} onClick={prevMonth} />
                <Cell children={format(value, "LLLL yyyy")} classname={"month"} />
                <Cell children={">"} onClick={nextMonth} />
                <Cell children={">>"} onClick={nextYear} />
                {weeks.map((week, index) => (
                    <Cell key={index} classname={"days"}>{week}</Cell>
                ))}
                {Array.from({ length: prefixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
                {Array.from({ length: numDays }).map((_, index) => (
                    <Cell key={index} children={index + 1} />
                ))}
                {Array.from({ length: suffixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
            </div>
        </div>
    )
}

export default Calender