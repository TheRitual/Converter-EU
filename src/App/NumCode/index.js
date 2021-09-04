import "./style.css";

const NumCode = ({ number, code, small }) => (
    <>
        <span className={"code__value" + (small ? " code__value--small" : "")}>{number}</span>&nbsp;
        <span className={"code " + (small ? "code--small" : "code--large")}>
            {code}
        </span>
    </>
);

export default NumCode;