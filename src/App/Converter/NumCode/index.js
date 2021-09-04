import "./style.css";

const NumCode = ({ number, code }) => (
    <>
        {number}&nbsp;
        <span className="code">
            {code}
        </span>
    </>
);

export default NumCode;