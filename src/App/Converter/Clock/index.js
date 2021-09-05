import ClockBlock, { ClockItem, ClockSeparator } from "./ClockBlock";
import "./style.css";

const Clock = ({ dateValue }) => {

    const calculatedData = {
        dataString: dateValue.toLocaleDateString(undefined, { month: "numeric", weekday: "short", day: "numeric", year: "numeric" }),
        dayProgress: dateValue.getHours() * 3600 + dateValue.getMinutes() * 60 + dateValue.getSeconds(),
        dateHour: dateValue.getHours() < 10 ? "0" + dateValue.getHours() : dateValue.getHours(),
        hourProgress: dateValue.getMinutes() * 60 + dateValue.getSeconds(),
        dateMinutes: dateValue.getMinutes() < 10 ? "0" + dateValue.getMinutes() : dateValue.getMinutes(),
        minutesProgress: dateValue.getSeconds(),
        dateSecond: dateValue.getSeconds() < 10 ? "0" + dateValue.getSeconds() : dateValue.getSeconds(),
        secondsProgress: dateValue.getMilliseconds(),
    }

    return (
        <section className="clock">
            <ClockItem>
                <ClockBlock content={calculatedData.dataString} progress={calculatedData.dayProgress} max="86400" />
            </ClockItem>
            <ClockItem>
                <ClockBlock content={calculatedData.dateHour} progress={calculatedData.hourProgress} max="3600" />
                <ClockSeparator content=":" />
                <ClockBlock content={calculatedData.dateMinutes} progress={calculatedData.minutesProgress} max="60" />
                <ClockSeparator content="." />
                <ClockBlock content={calculatedData.dateSecond} progress={calculatedData.secondsProgress} max="1000" />
            </ClockItem>
        </section>
    );
}

export default Clock;