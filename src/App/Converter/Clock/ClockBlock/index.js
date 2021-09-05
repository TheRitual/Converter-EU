import "./style.css";

const ClockBlock = ({ content, progress, max }) => (
    <div className="clock__block">
        <div className="clock__number">
            {content}
        </div>
        <div className="clock__progress">
            <progress className="clock__progressBar" value={progress} max={max} />
        </div>
    </div>
);

export const ClockItem = ({ children }) => (
    <div className="clock__item">
        {children}
    </div>
);

export const ClockSeparator = ({ content }) => (
    <div className="clock__block">
        <div className="clock__number">
            {content}
        </div>
        <div className="clock__progress">
        </div>
    </div>
);

export default ClockBlock;