import "./style.css";

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
        <section className="clock">
            {formatDate(dateValue)}
        </section>
    );
}

export default Clock;