import { StyledClock } from "./styled";

const formatDate = (date) => date.toLocaleDateString(undefined, {
    month: "numeric",
    weekday: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

const Clock = ({ dateValue }) => {
    return (
        <StyledClock>
            {formatDate(dateValue)}
        </StyledClock>
    );
}

export default Clock;